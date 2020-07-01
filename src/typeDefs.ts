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
export type Effectiveness = { [dFactor in DamageFactor]: PokemonType[] };

export type TypeMatchup = {
	[pType in PokemonType]: {
		attacking: Effectiveness;
	};
};
