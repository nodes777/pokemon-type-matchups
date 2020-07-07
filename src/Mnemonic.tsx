import React from "react";

interface MnemonicProps {
	text: string;
}

export const Mnemonic: React.FC<MnemonicProps> = ({ text }) => {
	return <div>{text}</div>;
};
