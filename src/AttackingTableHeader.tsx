import React from "react";
import { RefManager } from "./RefManager";
import { allTypes } from "./PokemonTypeData";

import styles from "./styles.module.css";

interface AttackingTableHeaderProps {}

export const AttackingTableHeader: React.FC<AttackingTableHeaderProps> = ({}) => {
	return (
		<div role="rowgroup">
			<div role="row" className={styles.tableColContainer}>
				{/* This causes col headers index to be off by one (Normal is col 2 of 19)*/}
				<div className={styles.emptyTd} role="gridcell" />

				{allTypes.map((pokeType, col) => {
					const ref = (RefManager[`row${0}col${col}`] = React.createRef());
					return (
						<div
							role="columnheader"
							className={styles.tableHeaderCols}
							key={`${pokeType}Col`}
							ref={ref}
						>
							{pokeType}
							<span className={styles.visuallyHidden}> Attacking </span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
