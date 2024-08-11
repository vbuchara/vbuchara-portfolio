import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import { columns } from "@wordpress/icons";

import { type GridStyles, defaultGridSettingsVariables } from "@components/editor-grid-settings";
import type { BackgroundImageStyles } from "@components/editor-background-image-settings";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

const { default: block } = await import("./block.json") as BlockJsonDefault<SectionAttributesType>;

export interface SectionPaddingStyles {
    paddingBlock?: string,
    paddingInline?: string,
    paddingInlineStart?: string,
    paddingInlineEnd?: string,
    paddingBlockStart?: string,
    paddingBlockEnd?: string,
}

export interface SectionStyles {
    grid: GridStyles,
    padding: SectionPaddingStyles,
    minHeight: string,
    backgroundColor?: string,
    backgroundGradient?: string,
}

export interface SectionAttributesType {
    styles: SectionStyles,
    backgroundImage: BackgroundImageStyles,
};

registerBlockType<SectionAttributesType>(block.name, {
    ...block,
    attributes: {
        styles: {
            type: "object",
            default: {
                grid: defaultGridSettingsVariables,
                padding: {},
                minHeight: "900px",
            } satisfies SectionStyles,
        },
        backgroundImage: {
            type: "object",
            default: {} satisfies BackgroundImageStyles,
        }
    },
    icon: columns,
    edit: EditComponent,
    save: SaveComponent,
});