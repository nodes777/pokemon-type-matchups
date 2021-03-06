import { RefManager } from "./RefManager";
import { PokemonType } from "./typeDefs";
import { allTypes } from "./PokemonTypeData";

export const moveTo = (newrow: number, newcol: number) => {
	if (
		newrow >= 1 &&
		newcol >= 1 &&
		newrow <= allTypes.length &&
		newcol <= allTypes.length
	) {
		RefManager[`row${newrow}col${newcol}`].current?.focus();
	}
};

// export const GrowAndShow = (
// 	attackingType: PokemonType,
// 	defendingType: PokemonType
// ) => {
// 	console.log(`${attackingType} attacks ${defendingType}`);
// };

export const handleKey = (
	event: React.KeyboardEvent,
	row: number,
	col: number
) => {
	switch (event.key) {
		case "ArrowRight":
			moveTo(row, col + 1);
			return false;
		case "ArrowLeft":
			moveTo(row, col - 1);
			return false;
		case "ArrowDown":
			moveTo(row + 1, col);
			return false;
		case "ArrowUp":
			moveTo(row - 1, col);
			return false;
		case "Enter":
			return true;
	}
	event.preventDefault();
};
