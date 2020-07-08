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
				<thead className={styles.attackHeader}>
					<tr>
						<th
							role="columnheader"
							id="attackingHeader"
							scope="col"
							colSpan={numOfPokeTypes}
						>
							Attacking
						</th>
					</tr>
				</thead>
				<AttackingTableHeader />

				<DefendingHeaderAndRows />
			</table>
		</div>
	);
};
