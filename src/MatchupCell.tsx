import React, { useState } from "react";
import styles from "./styles.module.css";
import { PokemonType, DamageFactor } from "./typeDefs";
import { handleKey } from "./keyboardEventHandlers";
import { determineDamageFactor } from "./helpers";
import { Mnemonic } from "./Mnemonic";

interface MatchupCellProps {
	reference: React.RefObject<HTMLDivElement>;
	attackingType: PokemonType;
	defendingType: PokemonType;
	row: number;
	col: number;
}
export const MatchupCell: React.FC<MatchupCellProps> = ({
	reference,
	defendingType,
	attackingType,
	row,
	col,
}) => {
	const [expanded, setExpanded] = useState(false);
	const info = determineDamageFactor(
		attackingType,
		defendingType as PokemonType
	);
	const damageFactor = info.factorToDisplay;
	const mneumonic = info.mneumonic;
	const determineFactorStyle = (damageFactor: DamageFactor) => {
		switch (damageFactor) {
			case "2x":
				return styles.twoX;
			case "1/2x":
				return styles.halfX;
			case "0x":
				return styles.zeroX;
			default:
				return "";
		}
	};
	const factorStyle = determineFactorStyle(damageFactor as DamageFactor);

	return (
		<div
			role="gridcell"
			ref={reference}
			className={`${
				expanded ? styles.bigCell : styles.tableCell
			}${factorStyle}`}
			tabIndex={-1}
			onKeyDown={(e: React.KeyboardEvent) => {
				const entered = handleKey(e, row, col, attackingType, defendingType);
				if (entered !== undefined) {
					setExpanded(entered);
				}
			}}
			onBlur={() => {
				setExpanded(false);
			}}
		>
			<div>{damageFactor}</div>
			<div>
				{expanded ? (
					<div>
						<Mnemonic text={mneumonic} />
					</div>
				) : null}
			</div>
		</div>
	);
};
