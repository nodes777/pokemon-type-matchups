import React from "react";
import styles from "./styles.module.css";
import { AttackingTableHeader } from "./AttackingTableHeader";
import { DefendingHeaderAndRows } from "./DefendingHeaderAndRows";
import { allTypes } from "./PokemonTypeData";
interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({}) => {
	const numOfPokeTypes = allTypes.length;
	return (
		<div className={styles.container}>
			<table
				role="grid"
				// aria-colcount={numOfPokeTypes}
				// aria-rowcount={numOfPokeTypes}
				className={styles.table}
			>
				<tbody>
					<tr role="row" className={styles.attackHeaderRow}>
						<td className={styles.emptyTd}>&nbsp;</td>
						<td className={styles.emptyTd}>&nbsp;</td>
						<th
							role="columnheader"
							scope="colgroup"
							colSpan={numOfPokeTypes}
							className={styles.attackingHeader}
						>
							Attacking
						</th>
					</tr>
					<AttackingTableHeader />

					<DefendingHeaderAndRows />
				</tbody>
			</table>
		</div>
	);
};
