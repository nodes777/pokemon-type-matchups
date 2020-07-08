import React from "react";
import { RefManager } from "./RefManager";
import { allTypes } from "./PokemonTypeData";

import styles from "./styles.module.css";

interface AttackingTableHeaderProps {}

export const AttackingTableHeader: React.FC<AttackingTableHeaderProps> = ({}) => {
	return (
		<thead role="rowgroup">
			<tr className={styles.tableColContainer} role="row">
				<td className={styles.emptyTd} />

				{allTypes.map((pokeType, c) => {
					const col = c + 1;
					const ref = (RefManager[`row${1}col${col}`] = React.createRef());
					return (
						<th
							role="columnheader"
							className={styles.tableHeaderCols}
							key={`${pokeType}Col`}
						>
							<div ref={ref}>
								{pokeType}
								<span className={styles.visuallyHidden}> Attacking </span>
							</div>
						</th>
					);
				})}
			</tr>
		</thead>
	);
};
