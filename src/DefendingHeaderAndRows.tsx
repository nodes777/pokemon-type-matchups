import React from "react";
import { RefManager } from "./RefManager";
import { PokemonType } from "./typeDefs";
import { allTypes } from "./PokemonTypeData";

import styles from "./styles.module.css";
import { MatchupCell } from "./MatchupCell";

interface DefendingHeaderAndRowsProps {}

export const DefendingHeaderAndRows: React.FC<DefendingHeaderAndRowsProps> = ({}) => {
	return (
		<>
			{allTypes.map((pokeType, r) => {
				// plus 1 so that col/row indexing makes sense
				const row = r + 1;
				const ref = (RefManager[`row${row}col${1}`] = React.createRef());
				return (
					<tr
						role="row"
						className={styles.tableRow}
						key={`Row${row}`}
						// aria-rowindex={row}
					>
						{r === 0 ? (
							<th
								role="rowheader"
								scope="rowgroup"
								rowSpan={18}
								className={styles.defendHeader}
							>
								<div>Defending</div>
							</th>
						) : null}

						<th
							role="rowheader"
							scope="row"
							className={styles.tableHeaderRows}
							key={`${pokeType}Row`}
						>
							<div ref={ref}>{pokeType}</div>
						</th>

						{createRow(pokeType as PokemonType, row)}
					</tr>
				);
			})}
		</>
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
