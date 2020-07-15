import React from "react";
import styles from "./styles.module.css";
import { AttackingTypeTableHeaders } from "./AttackingTypeTableHeaders";
import { DefendingHeaderAndRows } from "./DefendingHeaderAndRows";
import { allTypes } from "./PokemonTypeData";
interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({}) => {
	const numOfPokeTypes = allTypes.length;
	const numOfCells = numOfPokeTypes + 1;
	return (
		<div className={styles.container}>
			<table role="grid" className={styles.table}>
				<caption>Pokemon Type Matchups</caption>
				<tbody>
					<tr role="row" className={styles.attackingHeaderRow}>
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
					<AttackingTypeTableHeaders />

					<DefendingHeaderAndRows />
				</tbody>
			</table>
		</div>
	);
};
