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
			"0x": { Ground: "Birds can't hurt the ground" },
			"1/2x": {
				Steel: "Birds can barely hurt metal",
				Rock: "Birds can barely hurt rocks",
				Electric: "Flaps get zaps",
			},
			"1x": {},
			"2x": {
				Fighting: "It's hard to punch birds",
				Bug: "Birds eat bugs",
				Grass: "Birds eat nuts and seeds, which is basically grass",
			},
		},
	},
	Poison: {
		attacking: {
			"0x": { Steel: "Can't poison metal, it's not even alive" },
			"1/2x": {
				Poison: "Can't poison a Poison",
				Ground: "The Ground doesn't get sick",
				Rock: "Can't poison a Rock",
			},
			"1x": {},
			"2x": {
				Grass: "Grass roots suck up the poison",
				Fairy: "Fairies get sick, Tinkerbell etc",
			},
		},
	},
	Ground: {
		attacking: {
			"0x": { Flying: "The ground can't touch birds" },
			"1/2x": { Bug: "Bug", Grass: "Grass" },
			"1x": {},
			"2x": {
				Poison: "Poison",
				Rock: "Rock",
				Steel: "Earthquakes can take down buildings",
				Fire: "Ground puts out fire",
				Electric: "Ground Grounds electricity",
			},
		},
	},
	Rock: {
		attacking: {
			"0x": {},
			"1/2x": { Fighting: "Fighting", Ground: "Ground", Steel: "Steel" },
			"1x": {},
			"2x": { Flying: "Flying", Bug: "Bug", Fire: "Fire", Ice: "Ice" },
		},
	},
	Bug: {
		attacking: {
			"0x": {},
			"1/2x": {
				Fighting: "Fighting",
				Flying: "Flying",
				Poison: "Poison",
				Ghost: "Ghost",
				Steel: "Steel",
				Fire: "Fire",
				Fairy: "Fairy",
			},
			"1x": {},
			"2x": { Grass: "Grass", Psychic: "Psychic", Dark: "Dark" },
		},
	},
	Ghost: {
		attacking: {
			"0x": { Normal: "Normal" },
			"1/2x": { Dark: "Dark" },
			"1x": {},
			"2x": { Ghost: "Ghost", Psychic: "Psychic" },
		},
	},
	Steel: {
		attacking: {
			"0x": {},
			"1/2x": {
				Steel: "Steel",
				Fire: "Fire",
				Water: "Water",
				Electric: "Electric",
			},
			"1x": {},
			"2x": { Rock: "Rock", Ice: "Ice", Fairy: "Fairy" },
		},
	},
	Fire: {
		attacking: {
			"0x": {},
			"1/2x": { Rock: "Rock", Fire: "Fire", Water: "Water", Dragon: "Dragon" },
			"1x": {},
			"2x": { Bug: "Bug", Steel: "Steel", Grass: "Grass", Ice: "Ice" },
		},
	},
	Water: {
		attacking: {
			"0x": {},
			"1/2x": { Water: "Water", Grass: "Grass", Dragon: "Dragon" },
			"1x": {},
			"2x": { Ground: "Ground", Rock: "Rock", Fire: "Fire" },
		},
	},
	Grass: {
		attacking: {
			"0x": {},
			"1/2x": {
				Fighting: "Fighting",
				Flying: "Flying",
				Bug: "Bug",
				Steel: "Steel",
				Fire: "Fire",
				Grass: "Grass",
				Ice: "Ice",
			},
			"1x": {},
			"2x": { Ground: "Ground", Rock: "Rock", Water: "Water" },
		},
	},
	Electric: {
		attacking: {
			"0x": { Electric: "Ground" },
			"1/2x": { Water: "Water", Grass: "Grass", Dragon: "Dragon" },
			"1x": {},
			"2x": { Flying: "Flying", Water: "Water" },
		},
	},
	Psychic: {
		attacking: {
			"0x": { Dark: "Dark" },
			"1/2x": { Steel: "Steel", Psychic: "Psychic" },
			"1x": {},
			"2x": { Fighting: "Fighting", Poison: "Poison" },
		},
	},
	Ice: {
		attacking: {
			"0x": {},
			"1/2x": { Steel: "Steel", Fire: "Fire", Water: "Water", Ice: "Ice" },
			"1x": {},
			"2x": {
				Flying: "Flying",
				Ground: "Ground",
				Grass: "Grass",
				Dragon: "Dragon",
			},
		},
	},
	Dragon: {
		attacking: {
			"0x": { Fairy: "Fairy" },
			"1/2x": { Steel: "Steel" },
			"1x": {},
			"2x": { Dragon: "Dragon" },
		},
	},
	Dark: {
		attacking: {
			"0x": {},
			"1/2x": { Fighting: "Fighting", Dark: "Dark", Fairy: "Fairy" },
			"1x": {},
			"2x": { Ghost: "Ghost", Psychic: "Psychic" },
		},
	},
	Fairy: {
		attacking: {
			"0x": {},
			"1/2x": { Poison: "Poison", Steel: "Steel", Fire: "Fire" },
			"1x": {},
			"2x": { Fighting: "Fighting", Dragon: "Dragon", Dark: "Dark" },
		},
	},
};

export const allTypes = Object.keys(typeMatchups);
