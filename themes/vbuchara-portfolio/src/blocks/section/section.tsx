import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import { columns } from "@wordpress/icons";

import type { 
    AlignContentValue,
    AlignItemsValue,
    GridAutoFlowValue, 
    JustifyContentValue, 
    JustifyItemsValue
} from "@constants/block-styles";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

const { default: block } = await import("./block.json") as BlockJsonDefault<SectionAttributesType>;

export interface SectionGridStyles {
    gridTemplateColumns: string,
    gridTemplateRows: string,
    gridAutoFlow: GridAutoFlowValue,
    gridAutoColumns: string,
    gridAutoRows: string,
    rowGap: string,
    columnGap: string,
    justifyContent: JustifyContentValue,
    alignContent: AlignContentValue,
    justifyItems: JustifyItemsValue,
    alignItems: AlignItemsValue,
}

export interface SectionPaddingStyles {
    paddingBlock?: string,
    paddingInline?: string,
    paddingInlineStart?: string,
    paddingInlineEnd?: string,
    paddingBlockStart?: string,
    paddingBlockEnd?: string,
}

export interface SectionStyles {
    grid: SectionGridStyles,
    padding: SectionPaddingStyles,
    minHeight: string
}

export interface SectionAttributesType {
    styles: SectionStyles
};

registerBlockType<SectionAttributesType>(block.name, {
    ...block,
    attributes: {
        styles: {
            type: "object",
            default: {
                grid: {
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "auto",
                    gridAutoFlow: "row",
                    gridAutoColumns: "1fr",
                    gridAutoRows: "auto",
                    rowGap: "0px",
                    columnGap: "0px",
                    justifyContent: "normal",
                    alignContent: "normal",
                    justifyItems: "normal",
                    alignItems: "normal",
                },
                padding: {},
                minHeight: "900px",
            } satisfies SectionStyles,
        },
    },
    icon: columns,
    edit: EditComponent,
    save: SaveComponent,
});