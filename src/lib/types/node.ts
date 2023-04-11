import type { Writable } from 'svelte/store';
import type { AnchorStore, CSSDimensionString } from '.';
import type { XYPosition, NodeKey, Dimensions, ConfigObject, CSSColorString, GroupKey } from '.';

// This defines an interface for the actual node object that is used in the graph/stores
export interface Node {
	id: NodeKey;
	label: Writable<string>; // Primary label for default node
	dimensions: Dimensions;
	position: XYPosition;
	inputs: Writable<number>; //Number of default input anchors to render
	outputs: Writable<number>; // Number of default output anchors to render
	anchors: AnchorStore;
	header: Writable<boolean>;
	group: Writable<GroupKey | null>;
	collapsed: Writable<boolean>;
	visible: Writable<boolean>;
	resizingWidth: Writable<boolean>;
	resizingHeight: Writable<boolean>;
	moving: Writable<boolean>;
	editable: Writable<boolean>;
	locked: Writable<boolean>;
	selectable: Writable<boolean>;
	connectable: Writable<boolean>;
	collapsible: Writable<boolean>;
	deletable: Writable<boolean>;
	hideable: Writable<boolean>;
	focusable: Writable<boolean>;
	resizable: Writable<boolean>;
	zIndex: Writable<number>;
	ariaLabel: string;
	direction: Writable<'TD' | 'LR'>;
	headerHeight: Writable<number>;
	borderRadius: Writable<number>;
	bgColor: Writable<CSSColorString | null>;
	borderColor: Writable<CSSColorString | null>;
	selectionColor: Writable<CSSColorString | null>;
	textColor: Writable<CSSColorString | null>;
	headerColor: Writable<CSSColorString | null>;
}

// This defines an interface for the node object
// Passed to the createNode function
export interface NodeConfig {
	id?: string | number;
	dimensions?: {
		width: number;
		height: number;
	};
	position?: {
		x: number;
		y: number;
	};
	direction: 'TD' | 'LR';
	zIndex?: number;
	label?: string;
	group?: GroupKey;
	editable?: boolean;
	resizable?: boolean;
	inputs?: number;
	outputs?: number;
	locked?: boolean;
	selectionColor?: CSSColorString;
	component?: ConstructorOfATypedSvelteComponent;
	config?: ConfigObject;
	width?: number;
	height?: number;
	header?: true;
	props?: object;
	borderColor?: CSSColorString;
	bgColor?: CSSColorString;
	borderRadius?: number;
	borderWidth?: number;
	textColor?: CSSColorString;
	headerColor?: CSSColorString;
}

export type UserDimension = number | CSSDimensionString;

export type Properties = Record<string, Writable<Parameter>>;

export type WritableNode = Writable<Node>;

export type Parameter = number | string | object | boolean;
