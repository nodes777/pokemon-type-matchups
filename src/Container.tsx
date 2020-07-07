import React from "react";
import styles from "./styles.module.css";
import { AttackingTableHeader } from "./AttackingTableHeader";
import { DefendingHeaderAndRows } from "./DefendingHeaderAndRows";
interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({}) => {
	return (
		<div className={styles.container}>
			<div role="grid" className={styles.table}>
				<div role="row">
					<div
						role="columnheader"
						id="attackingHeader"
						className={styles.attackHeader}
					>
						Attacking
					</div>
				</div>
				<AttackingTableHeader />

				<div role="rowgroup" className={styles.leftGroup}>
					<div className={styles.defendHeader}>
						<div role="rowheader">Defending</div>
					</div>
					<DefendingHeaderAndRows />
				</div>
			</div>
		</div>
	);
};
