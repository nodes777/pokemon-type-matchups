import { TypeMatchup } from "./typeDefs";

export const typeMatchups: TypeMatchup = {
	Normal: {
		attacking: {
			"0x": { Ghost: "People (Normal) can't touch ghosts" },
			"1/2x": {
				Steel: "Steel is hard if you hit it with your hand",
				Rock: "Rock is hard if you hit it with your hand",
			},
			"1x": {},
			"2x": {},
		},
	},
	Fighting: {
		attacking: {
			"0x": { Ghost: "You can't punch a ghost" },
			"1/2x": {
				Flying: "It's hard to punch a bird",
				Poison: "uhh",
				Bug: "uhh",
				Psychic: "The mind is mightier than the fist",
			},
			"1x": {},
			"2x": {
				Normal: "It hurts to get punched",
				Rock: "Rock Smash is a Fighting move",
				Steel: "uhh",
				Ice: "You break the ice!",
				Dark: "Uhh",
			},
		},
	},
	Flying: {
		attacking: {
			"0x": {},
			"1/2x": ["Steel", "Rock", "Electric"],
			"1x": {},
			"2x": ["Fighting", "Bug", "Grass"],
		},
	},
	Poison: {
		attacking: {
			"0x": ["Steel"],
			"1/2x": ["Poison", "Ground", "Steel", "Rock"],
			"1x": {},
			"2x": ["Grass", "Fairy"],
		},
	},
	Ground: {
		attacking: {
			"0x": ["Flying"],
			"1/2x": ["Bug", "Grass"],
			"1x": {},
			"2x": ["Poison", "Rock", "Steel", "Fire", "Electric"],
		},
	},
	Rock: {
		attacking: {
			"0x": {},
			"1/2x": ["Fighting", "Ground", "Steel"],
			"1x": {},
			"2x": ["Flying", "Bug", "Fire", "Ice"],
		},
	},
	Bug: {
		attacking: {
			"0x": {},
			"1/2x": [
				"Fighting",
				"Flying",
				"Poison",
				"Ghost",
				"Steel",
				"Fire",
				"Fairy",
			],
			"1x": {},
			"2x": ["Grass", "Psychic", "Dark"],
		},
	},
	Ghost: {
		attacking: {
			"0x": ["Normal"],
			"1/2x": ["Dark"],
			"1x": {},
			"2x": ["Ghost", "Psychic"],
		},
	},
	Steel: {
		attacking: {
			"0x": {},
			"1/2x": ["Steel", "Fire", "Water", "Electric"],
			"1x": {},
			"2x": ["Rock", "Ice", "Fairy"],
		},
	},
	Fire: {
		attacking: {
			"0x": {},
			"1/2x": ["Rock", "Fire", "Water", "Dragon"],
			"1x": {},
			"2x": ["Bug", "Steel", "Grass", "Ice"],
		},
	},
	Water: {
		attacking: {
			"0x": {},
			"1/2x": ["Water", "Grass", "Dragon"],
			"1x": {},
			"2x": ["Ground", "Rock", "Fire"],
		},
	},
	Grass: {
		attacking: {
			"0x": {},
			"1/2x": ["Fighting", "Flying", "Bug", "Steel", "Fire", "Grass", "Ice"],
			"1x": {},
			"2x": ["Ground", "Rock", "Water"],
		},
	},
	Electric: {
		attacking: {
			"0x": ["Ground"],
			"1/2x": ["Water", "Grass", "Dragon"],
			"1x": {},
			"2x": ["Flying", "Water"],
		},
	},
	Psychic: {
		attacking: {
			"0x": ["Dark"],
			"1/2x": ["Steel", "Psychic"],
			"1x": {},
			"2x": ["Fighting", "Poison"],
		},
	},
	Ice: {
		attacking: {
			"0x": {},
			"1/2x": ["Steel", "Fire", "Water", "Ice"],
			"1x": {},
			"2x": ["Flying", "Ground", "Grass", "Dragon"],
		},
	},
	Dragon: {
		attacking: {
			"0x": ["Fairy"],
			"1/2x": ["Steel"],
			"1x": {},
			"2x": ["Dragon"],
		},
	},
	Dark: {
		attacking: {
			"0x": {},
			"1/2x": ["Fighting", "Dark", "Fairy"],
			"1x": {},
			"2x": ["Ghost", "Psychic"],
		},
	},
	Fairy: {
		attacking: {
			"0x": {},
			"1/2x": ["Poison", "Steel", "Fire"],
			"1x": {},
			"2x": ["Fighting", "Dragon", "Dark"],
		},
	},
};

export const allTypes = Object.keys(typeMatchups);
