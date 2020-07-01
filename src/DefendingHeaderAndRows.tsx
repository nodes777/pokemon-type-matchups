import React from "react";
import { RefManager } from "./RefManager";
import { handleKey } from "./keyboardEventHandlers";
import { allTypes, PokemonType } from "./typeDefs";

import styles from "./styles.module.css";
import { determineDamageFactor } from "./helpers";

interface DefendingHeaderAndRowsProps {}

export const DefendingHeaderAndRows: React.FC<DefendingHeaderAndRowsProps> = ({}) => {
	return (
		<div className={styles.x}>
			{allTypes.map((pokeType, row) => {
				const ref = (RefManager[`row${row}col${0}`] = React.createRef());
				return (
					<div role="row" className={styles.tableRow} key={`Row${row}`}>
						<div
							role="rowheader"
							className={styles.tableHeaderRows}
							key={`${pokeType}Row`}
							ref={ref}
							tabIndex={-1}
							onKeyDown={(e: React.KeyboardEvent) => {
								handleKey(e, row, 0);
							}}
						>
							{pokeType}
						</div>

						{createRow(pokeType as PokemonType, row + 1)}
					</div>
				);
			})}
		</div>
	);
};

function createRow(attackingType: PokemonType, row: number) {
	return allTypes.map((defendingType, c) => {
		// plus 1 b/c of row header
		const col = c + 1;
		// create a ref and add it to the RefManager for easy access
		const ref = (RefManager[`row${row}col${col}`] = React.createRef());

		return (
			<div
				role="gridcell"
				ref={ref}
				key={`${defendingType}${attackingType}`}
				className={styles.tableCell}
				tabIndex={-1}
				onKeyDown={(e: React.KeyboardEvent) => {
					handleKey(e, row, col);
				}}
			>
				{determineDamageFactor(attackingType, defendingType as PokemonType)}
			</div>
		);
	});
}
