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
		defending: Effectiveness;
	};
};

export const typeMatchups: TypeMatchup = {
	Normal: {
		attacking: {
			"0x": ["Ghost"],
			"1/2x": ["Steel", "Rock"],
			"1x": [],
			"2x": [],
		},
		defending: { "0x": ["Ghost"], "1/2x": [], "1x": [], "2x": ["Fighting"] },
	},
	Fighting: {
		attacking: {
			"0x": ["Ghost"],
			"1/2x": ["Flying", "Poison", "Bug", "Psychic"],
			"1x": [],
			"2x": ["Normal", "Rock", "Steel", "Ice", "Dark"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Flying: {
		attacking: {
			"0x": [],
			"1/2x": ["Steel", "Rock", "Electric"],
			"1x": [],
			"2x": ["Fighting", "Bug", "Grass"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Poison: {
		attacking: {
			"0x": ["Steel"],
			"1/2x": ["Poison", "Ground", "Steel", "Rock"],
			"1x": [],
			"2x": ["Grass", "Fairy"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Ground: {
		attacking: {
			"0x": ["Flying"],
			"1/2x": ["Bug", "Grass"],
			"1x": [],
			"2x": ["Poison", "Rock", "Steel", "Fire", "Electric"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Rock: {
		attacking: {
			"0x": [],
			"1/2x": ["Fighting", "Ground", "Steel"],
			"1x": [],
			"2x": ["Flying", "Bug", "Fire", "Ice"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Bug: {
		attacking: {
			"0x": [],
			"1/2x": [
				"Fighting",
				"Flying",
				"Poison",
				"Ghost",
				"Steel",
				"Fire",
				"Fairy",
			],
			"1x": [],
			"2x": ["Grass", "Psychic", "Dark"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Ghost: {
		attacking: {
			"0x": ["Normal"],
			"1/2x": ["Dark"],
			"1x": [],
			"2x": ["Ghost", "Psychic"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Steel: {
		attacking: {
			"0x": [],
			"1/2x": ["Steel", "Fire", "Water", "Electric"],
			"1x": [],
			"2x": ["Rock", "Ice", "Fairy"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Fire: {
		attacking: {
			"0x": [],
			"1/2x": ["Rock", "Fire", "Water", "Dragon"],
			"1x": [],
			"2x": ["Bug", "Steel", "Grass", "Ice"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Water: {
		attacking: {
			"0x": [],
			"1/2x": ["Water", "Grass", "Dragon"],
			"1x": [],
			"2x": ["Ground", "Rock", "Fire"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Grass: {
		attacking: {
			"0x": [],
			"1/2x": ["Fighting", "Flying", "Bug", "Steel", "Fire", "Grass", "Ice"],
			"1x": [],
			"2x": ["Ground", "Rock", "Water"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Electric: {
		attacking: {
			"0x": ["Ground"],
			"1/2x": ["Water", "Grass", "Dragon"],
			"1x": [],
			"2x": ["Flying", "Water"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Psychic: {
		attacking: {
			"0x": ["Dark"],
			"1/2x": ["Steel", "Psychic"],
			"1x": [],
			"2x": ["Fighting", "Poison"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Ice: {
		attacking: {
			"0x": [],
			"1/2x": ["Steel", "Fire", "Water", "Ice"],
			"1x": [],
			"2x": ["Flying", "Ground", "Grass", "Dragon"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Dragon: {
		attacking: {
			"0x": ["Fairy"],
			"1/2x": ["Steel"],
			"1x": [],
			"2x": ["Dragon"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Dark: {
		attacking: {
			"0x": [],
			"1/2x": ["Fighting", "Dark", "Fairy"],
			"1x": [],
			"2x": ["Ghost", "Psychic"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
	Fairy: {
		attacking: {
			"0x": [],
			"1/2x": ["Poison", "Steel", "Fire"],
			"1x": [],
			"2x": ["Fighting", "Dragon", "Dark"],
		},
		defending: {
			"0x": [],
			"1/2x": [],
			"1x": [],
			"2x": [],
		},
	},
};

export const allTypes = Object.keys(typeMatchups);
