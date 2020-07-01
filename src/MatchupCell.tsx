import React, { useState } from "react";
import styles from "./styles.module.css";
import { PokemonType } from "./typeDefs";
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
	return (
		<div
			role="gridcell"
			ref={reference}
			className={expanded ? styles.bigCell : styles.tableCell}
			tabIndex={-1}
			onKeyDown={(e: React.KeyboardEvent) => {
				const entered = handleKey(e, row, col, attackingType, defendingType);
				if (entered !== undefined) {
					setExpanded(entered);
				}
			}}
		>
			<div>
				{determineDamageFactor(attackingType, defendingType as PokemonType)}
			</div>
			<div>
				{expanded ? (
					<div>
						<Mnemonic />
					</div>
				) : null}
			</div>
		</div>
	);
};
