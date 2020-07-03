import { PokemonType, DamageFactor } from "./typeDefs";
import { typeMatchups } from "./PokemonTypeData";

export function determineDamageFactor(
	attackingType: PokemonType,
	defendingType: PokemonType
) {
	let factorToDisplay = "1x";
	let mneumonic = "";

	const matchups = typeMatchups[attackingType].attacking;
	// console.log(matchups);

	const dFactors = Object.keys(matchups);
	//console.log(dFactors); ["0x", "1/2x", "1x", "2x"]
	// console.log(Object.entries(matchups));
	// console.log(matchups["2x"]);

	dFactors.forEach((dFactor) => {
		if (
			Object.keys(matchups[dFactor as DamageFactor]).includes(defendingType)
		) {
			factorToDisplay = dFactor;
			// why is saying possibly undefined?
			const saying = matchups[dFactor as DamageFactor][defendingType];
			// console.log(saying);
			mneumonic = saying ? saying : "";
		}
	});

	// dFactors.forEach((dFactor) => {
	// 	if (matchups[dFactor as DamageFactor].includes(defendingType)) {
	// 		factorToDisplay = dFactor;
	// 	}
	// });

	return { factorToDisplay, mneumonic };
}
