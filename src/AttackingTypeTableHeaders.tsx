import React from "react";
import { RefManager } from "./RefManager";
import { allTypes } from "./PokemonTypeData";

import styles from "./styles.module.css";

interface AttackingTableHeaderProps {}

export const AttackingTypeTableHeaders: React.FC<AttackingTableHeaderProps> = ({}) => {
	return (
		<tr className={styles.attackingTypesHeaderRow} role="row">
			{/* Empty cells to make room for Defending and Defending Type headers */}
			<td className={styles.emptyTd}>&nbsp;</td>
			<td className={styles.emptyTd}>&nbsp;</td>
			{allTypes.map((pokeType, c) => {
				const col = c + 1;
				const ref = (RefManager[`row${1}col${col}`] = React.createRef());
				return (
					<th
						role="columnheader"
						scope="col"
						className={styles.tableHeaderCols}
						key={`${pokeType}Col`}
					>
						<div ref={ref}>{pokeType}</div>
					</th>
				);
			})}
		</tr>
	);
};
