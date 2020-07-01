import { PokemonType, DamageFactor } from "./typeDefs";
import { typeMatchups } from "./PokemonTypeData";

export function determineDamageFactor(
	attackingType: PokemonType,
	defendingType: PokemonType
) {
	let factorToDisplay = "1x";

	const matchups = typeMatchups[attackingType].attacking;
	const dFactors = Object.keys(matchups);

	dFactors.forEach((dFactor) => {
		if (matchups[dFactor as DamageFactor].includes(defendingType)) {
			factorToDisplay = dFactor;
		}
	});

	return factorToDisplay;
}
