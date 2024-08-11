import type { SelectControlOptions } from "@wordpress/components";

// Global Styles Options
export const StyleGlobalOptions = [
    {
        label: "Inherit",
        value: "inherit",
    },
    {
        label: "Initial",
        value: "initial",
    },
    {
        label: "Unset",
        value: "unset",
    },
    {
        label: "Revert",
        value: "revert",
    },
    {
        label: "Revert Layer",
        value: "revert-layer",
    }
] as const satisfies SelectControlOptions[];

// White Space Options 
export const WhiteSpaceSelectOptions = [
    {
        label: "Normal",
        value: "normal",
    },
    {
        label: "No Wrap",
        value: "nowrap",
    },
    {
        label: "Pre",
        value: "pre",
    },
    {
        label: "Pre Wrap",
        value: "pre-wrap",
    },
    {
        label: "Pre Line",
        value: "pre-line",
    },
    {
        label: "Break Words",
        value: "break-word",
    },
    ...StyleGlobalOptions,
] as const satisfies SelectControlOptions[];

export type WhiteSpaceOption = (typeof WhiteSpaceSelectOptions)[number];

export type WhiteSpaceValue = WhiteSpaceOption["value"];

// Grid Options
export const GridAutoFlowOptions = [
    {
        label: "Row",
        value: "row",
    },
    {
        label: "Column",
        value: "column",
    },
    {
        label: "Dense",
        value: "dense",
    },
    {
        label: "Row Dense",
        value: "row dense",
    },
    {
        label: "Column Dense",
        value: "column dense",
    },
    ...StyleGlobalOptions,
] as const satisfies SelectControlOptions[];

export type GridAutoFlowOption = (typeof GridAutoFlowOptions)[number];

export type GridAutoFlowValue = GridAutoFlowOption["value"];

export const BoxContentAlignmentCommonOptions = [
    { 
        label: "Start",
        value: "start" 
    },
    { 
        label: "Center",
        value: "center" 
    },
    { 
        label: "End",
        value: "end" 
    },
    { 
        label: "Left",
        value: "left" 
    },
    { 
        label: "Right",
        value: "right" 
    },
    { 
        label: "Normal",
        value: "normal" 
    },
    { 
        label: "Space Between",
        value: "space-between" 
    },
    { 
        label: "Space Around",
        value: "space-around" 
    },
    { 
        label: "Space Evenly",
        value: "space-evenly" 
    },
    { 
        label: "Stretch",
        value: "stretch" 
    },
    { 
        label: "Safe Center",
        value: "safe center" 
    },
    { 
        label: "Unsafe Center",
        value: "unsafe center" 
    },
] as const satisfies SelectControlOptions[];

export const JustifyContentOptions = [
    ...BoxContentAlignmentCommonOptions,
    ...StyleGlobalOptions,
] as const satisfies SelectControlOptions[];

export type JustifyContentOption = (typeof JustifyContentOptions)[number];

export type JustifyContentValue = JustifyContentOption["value"];

export const AlignContentOptions = [
    ...BoxContentAlignmentCommonOptions,
    {
        label: "Baseline",
        value: "baseline",
    },
    {
        label: "First Baseline",
        value: "first baseline",
    },
    {
        label: "Last Baseline",
        value: "last baseline",
    },
    ...StyleGlobalOptions,
] as const satisfies SelectControlOptions[];

export type AlignContentOption = (typeof AlignContentOptions)[number];

export type AlignContentValue = AlignContentOption["value"];

export const BoxItemsAlignmentCommonOptions = [
    { 
        label: "Normal",
        value: "normal" 
    },
    { 
        label: "Stretch",
        value: "stretch" 
    },
    { 
        label: "Start",
        value: "start" 
    },
    { 
        label: "Center",
        value: "center" 
    },
    { 
        label: "End",
        value: "end" 
    },
    { 
        label: "Self Start",
        value: "self-start" 
    },
    { 
        label: "Self End",
        value: "self-end" 
    },
    { 
        label: "Left",
        value: "left" 
    },
    { 
        label: "Right",
        value: "right" 
    },
    { 
        label: "Anchor Center",
        value: "anchor-center" 
    },
    { 
        label: "Baseline",
        value: "baseline" 
    },
    { 
        label: "First Baseline",
        value: "first baseline" 
    },
    { 
        label: "Last Baseline",
        value: "last baseline" 
    },
    { 
        label: "Safe Center",
        value: "safe center" 
    },
    { 
        label: "Unsafe Center",
        value: "unsafe center" 
    },
] as const satisfies SelectControlOptions[];

export const JustifyItemsOptions = [
    ...BoxItemsAlignmentCommonOptions,
    { 
        label: "Legacy Right",
        value: "legacy right" 
    },
    { 
        label: "Legacy Left",
        value: "legacy left" 
    },
    { 
        label: "Legacy Center",
        value: "legacy center" 
    },
    ...StyleGlobalOptions,
] as const satisfies SelectControlOptions[];

export type JustifyItemsOption = (typeof JustifyItemsOptions)[number];

export type JustifyItemsValue = JustifyItemsOption["value"];

export const AlignItemsOptions = [
    ...BoxItemsAlignmentCommonOptions,
    ...StyleGlobalOptions,
] as const satisfies SelectControlOptions[];

export type AlignItemsOption = (typeof AlignItemsOptions)[number];

export type AlignItemsValue = AlignItemsOption["value"];

// Background Options
export const BackgroundAttachmentOptions = [
    {
        label: "Scroll",
        value: "scroll",
    },
    {
        label: "Fixed",
        value: "fixed",
    },
    {
        label: "Local",
        value: "local",
    },
    ...StyleGlobalOptions,
] as const satisfies SelectControlOptions[];

export type BackgroundAttachmentOption = (typeof BackgroundAttachmentOptions)[number];

export type BackgroundAttachmentValue = BackgroundAttachmentOption["value"];

export const BackgroundBoxCommonOptions = [
    {
        label: "Border Box",
        value: "border-box",
    },
    {
        label: "Padding Box",
        value: "padding-box",
    },
    {
        label: "Content Box",
        value: "content-box",
    }
] as const satisfies SelectControlOptions[];

export const BackgroundClipOptions = [
    ...BackgroundBoxCommonOptions,
    {
        label: "Text",
        value: "text",
    },
    ...StyleGlobalOptions
] as const satisfies SelectControlOptions[];

export type BackgroundClipOption = (typeof BackgroundClipOptions)[number];

export type BackgroundClipValue = BackgroundClipOption["value"];

export const BackgroundOriginOptions = [
    ...BackgroundBoxCommonOptions,
    ...StyleGlobalOptions
];

export type BackgroundOriginOption = (typeof BackgroundOriginOptions)[number];

export type BackgroundOriginValue = BackgroundOriginOption["value"];

// Position Options
export const PositionOptions = [
    {
        label: "Static",
        value: "static",
    },
    {
        label: "Relative",
        value: "relative",
    },
    {
        label: "Absolute",
        value: "absolute",
    },
    {
        label: "Fixed",
        value: "fixed",
    },
    {
        label: "Sticky",
        value: "sticky",
    },
    ...StyleGlobalOptions
] as const satisfies SelectControlOptions[];

export type PositionOption = (typeof PositionOptions)[number];

export type PositionValue = PositionOption["value"];

