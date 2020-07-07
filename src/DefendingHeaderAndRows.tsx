import React from "react";
import { RefManager } from "./RefManager";
import { PokemonType } from "./typeDefs";
import { allTypes } from "./PokemonTypeData";

import styles from "./styles.module.css";
import { MatchupCell } from "./MatchupCell";

interface DefendingHeaderAndRowsProps {}

export const DefendingHeaderAndRows: React.FC<DefendingHeaderAndRowsProps> = ({}) => {
	return (
		<div role="rowgroup" className={styles.defendingHeaderAndRows}>
			{allTypes.map((pokeType, r) => {
				// plus 1 so that col/row indexing makes sense
				const row = r + 1;
				const ref = (RefManager[`row${row}col${1}`] = React.createRef());
				return (
					<div
						role="row"
						className={styles.tableRow}
						key={`Row${row}`}
						// aria-rowindex={row}
					>
						<div
							role="rowheader"
							className={styles.tableHeaderRows}
							key={`${pokeType}Row`}
							ref={ref}
						>
							{pokeType}
							<span className={styles.visuallyHidden}> Defending </span>
						</div>

						<div className={styles.rowContainer}>
							{createRow(pokeType as PokemonType, row)}
						</div>
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
		const reference = (RefManager[`row${row}col${col}`] = React.createRef());

		return (
			<MatchupCell
				key={`${defendingType}${attackingType}`}
				reference={reference}
				defendingType={defendingType as PokemonType}
				attackingType={attackingType}
				row={row}
				col={col}
			/>
		);
	});
}
