import React from "react";
import styles from "./styles.module.css";
import { typeMatchups, PokemonType, TypeMatchup } from "./typeDefs";
import { handleKey } from "./keyboardEventHandlers";
import { determineDamageFactor } from "./helpers";
import { RefManager } from "./RefManager";
import { AttackingTableHeader } from "./AttackingTableHeader";
import { DefendingHeaderAndRows } from "./DefendingHeaderAndRows";
interface ContainerProps {}

const allTypes = Object.keys(typeMatchups);

export const Container: React.FC<ContainerProps> = ({}) => {
	return (
		<div className={styles.container}>
			<div role="grid" className={styles.table}>
				<span role="columnheader" className={styles.attackHeader}>
					Attacking
				</span>
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
