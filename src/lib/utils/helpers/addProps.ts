// import type {
// 	NodeProps,
// 	AnchorProps,
// 	EdgeProps,
// 	NodeConfig,
// 	AnchorDrawerConfig,
// 	EdgeDrawerConfig
// } from '$lib/types';

export function addProps(
	propNames: string[],
	propValues: (string | number | boolean | undefined)[],
	propObject: Record<string, any>
	// propObject: Record<string, string | number | boolean | undefined>
	// propObject: NodeConfig | AnchorDrawerConfig | EdgeDrawerConfig
): void {
	for (let i = 0; i < propNames.length; i++) {
		if (propValues[i] !== undefined) propObject[propNames[i]] = propValues[i];
	}
}
