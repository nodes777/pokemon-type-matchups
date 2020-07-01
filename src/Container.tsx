import React from "react";
import styles from "./styles.module.css";
import { AttackingTableHeader } from "./AttackingTableHeader";
import { DefendingHeaderAndRows } from "./DefendingHeaderAndRows";
interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({}) => {
	return (
		<div className={styles.container}>
			<div role="grid" className={styles.table}>
				<div role="columnheader" className={styles.attackHeader}>
					Attacking
				</div>
				<AttackingTableHeader />

				<div role="rowgroup" className={styles.leftGroup}>
					<div className={styles.defendHeader}>
						<div role="columnheader">Defending</div>
					</div>
					<DefendingHeaderAndRows />
				</div>
			</div>
		</div>
	);
};
