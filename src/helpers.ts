import { PokemonType, DamageFactor } from "./typeDefs";
import { typeMatchups } from "./PokemonTypeData";

export function determineDamageFactor(
	attackingType: PokemonType,
	defendingType: PokemonType
) {
	let factorToDisplay = "1x";
	let mneumonic = "";

	const matchups = typeMatchups[attackingType].attacking;

	const dFactors = Object.keys(matchups);

	dFactors.forEach((dFactor) => {
		if (
			Object.keys(matchups[dFactor as DamageFactor]).includes(defendingType)
		) {
			factorToDisplay = dFactor;
			// why is saying possibly undefined? Extra step to ensure that mneumonic exists
			const saying = matchups[dFactor as DamageFactor][defendingType];
			mneumonic = saying ? saying : "";
		}
	});

	return { factorToDisplay, mneumonic };
}
