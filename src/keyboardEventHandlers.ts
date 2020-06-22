import { RefManager } from "./RefManager";
import { typeMatchups } from "./typeDefs";

const allTypes = Object.keys(typeMatchups);

export const moveTo = (newrow: number, newcol: number) => {
	if (
		newrow >= 0 &&
		newcol >= 0 &&
		newrow <= allTypes.length &&
		newcol <= allTypes.length - 1
	) {
		console.log(newrow, newcol);
		RefManager[`row${newrow}col${newcol}`].current?.focus();
	}
};

export const handleKey = (
	event: React.KeyboardEvent,
	row: number,
	col: number
) => {
	switch (event.key) {
		case "ArrowRight":
			moveTo(row, col + 1);
			break;
		case "ArrowLeft":
			moveTo(row, col - 1);
			break;
		case "ArrowDown":
			moveTo(row + 1, col);
			break;
		case "ArrowUp":
			moveTo(row - 1, col);
			break;
	}
	event.preventDefault();
};
