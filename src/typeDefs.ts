export type PokemonType =
	| "Normal"
	| "Fighting"
	| "Flying"
	| "Poison"
	| "Ground"
	| "Rock"
	| "Bug"
	| "Ghost"
	| "Steel"
	| "Fire"
	| "Water"
	| "Grass"
	| "Electric"
	| "Psychic"
	| "Ice"
	| "Dragon"
	| "Dark"
	| "Fairy";

export type DamageFactor = "0x" | "1/2x" | "1x" | "2x";
export type Effectiveness = {
	// is there a better way to index the union type?
	[dFactor in DamageFactor]: { [pType in PokemonType]?: string };
};

export type TypeMatchup = {
	[pType in PokemonType]: {
		attacking: Effectiveness;
	};
};
