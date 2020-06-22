import { RefObject } from "react";

interface Refs {
	[index: string]: RefObject<HTMLDivElement>;
}

export const RefManager: Refs = {};
