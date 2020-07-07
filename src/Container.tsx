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
			<div
				role="grid"
				aria-colcount={numOfPokeTypes}
				aria-rowcount={numOfPokeTypes}
				className={styles.table}
			>
				<div>
					<div
						role="columnheader"
						id="attackingHeader"
						className={styles.attackHeader}
					>
						Attacking
					</div>
				</div>
				<AttackingTableHeader />

				<div className={styles.leftGroup}>
					<div className={styles.defendHeader}>
						<div role="rowheader">Defending</div>
					</div>
					<DefendingHeaderAndRows />
				</div>
			</div>
		</div>
	);
};
