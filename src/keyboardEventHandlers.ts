import { RefManager } from "./RefManager";
import { typeMatchups, PokemonType } from "./typeDefs";

const allTypes = Object.keys(typeMatchups);

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
	col: number,
	attackingType: PokemonType,
	defendingType: PokemonType
) => {
	switch (event.key) {
		case "ArrowRight":
			moveTo(row, col + 1);
			return false;
			break;
		case "ArrowLeft":
			moveTo(row, col - 1);
			return false;
			break;
		case "ArrowDown":
			moveTo(row + 1, col);
			return false;
			break;
		case "ArrowUp":
			moveTo(row - 1, col);
			return false;
			break;
		case "Enter":
			// GrowAndShow(attackingType, defendingType);
			return true;
			break;
	}
	event.preventDefault();
};
