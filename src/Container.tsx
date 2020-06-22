import React from "react";
import styles from "./styles.module.css";
import { typeMatchups, PokemonType, TypeMatchup } from "./typeDefs";
import { handleKey } from "./keyboardEventHandlers";
import { determineDamageFactor } from "./helpers";
import { RefManager } from "./RefManager";
interface ContainerProps {}

const allTypes = Object.keys(typeMatchups);

function createRow(attackingType: PokemonType, row: number) {
	return allTypes.map((defendingType, c) => {
		// plus 1 b/c of row header
		const col = c + 1;
		// create a ref and add it to the RefManager for easy access
		const ref = (RefManager[`row${row}col${col}`] = React.createRef());

		return (
			<div
				role="gridcell"
				ref={ref}
				key={`${defendingType}${attackingType}`}
				className={styles.tableCell}
				tabIndex={-1}
				onKeyDown={(e: React.KeyboardEvent) => {
					handleKey(e, row, col);
				}}
			>
				{determineDamageFactor(attackingType, defendingType as PokemonType)}
			</div>
		);
	});
}

export const Container: React.FC<ContainerProps> = ({}) => {
	return (
		<div className={styles.container}>
			<div role="grid" className={styles.table}>
				<div role="rowgroup">
					<div role="row" className={styles.tableColContainer}>
						{/* This causes col headers index to be off by one (Normal is col 2 of 19)*/}
						<div className={styles.emptyTd} role="gridcell" />
						{/* TODO: include all cells starting with one call? */}
						{allTypes.map((pokeType, col) => {
							const ref = (RefManager[`row${0}col${col}`] = React.createRef());
							return (
								<div
									role="columnheader"
									className={styles.tableHeaderCols}
									key={`${pokeType}Col`}
									ref={ref}
									tabIndex={-1}
									onKeyDown={(e: React.KeyboardEvent) => {
										handleKey(e, 0, col);
									}}
								>
									{pokeType}
								</div>
							);
						})}
					</div>
				</div>

				{allTypes.map((pokeType, row) => {
					const ref = (RefManager[`row${row}col${0}`] = React.createRef());
					return (
						<div role="row" className={styles.tableRow} key={`Row${row}`}>
							<div
								role="rowheader"
								className={styles.tableHeaderRows}
								key={`${pokeType}Row`}
								ref={ref}
								tabIndex={-1}
								onKeyDown={(e: React.KeyboardEvent) => {
									handleKey(e, row, 0);
								}}
							>
								{pokeType}
							</div>
							{createRow(pokeType as PokemonType, row + 1)}
						</div>
					);
				})}
				{console.log(RefManager)}
			</div>
		</div>
	);
};
