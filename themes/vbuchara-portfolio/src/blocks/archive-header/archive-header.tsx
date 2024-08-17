import "./style.scss";
import "./edit.scss";

import { registerBlockType } from "@wordpress/blocks";
import { archive } from "@wordpress/icons";

import type { UnderlineStyles } from "@components/editor-underline-settings";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<ArchiveHeaderAttributesType>;

export interface ArchiveHeaderStyles {
    underline: UnderlineStyles
}

export type ArchiveHeaderAttributesType = {
    titleText: string,
    subtitleText: string,
    styles: ArchiveHeaderStyles
};

registerBlockType<ArchiveHeaderAttributesType>(block.name, {
    ...block,
    attributes: {
        titleText: {
            type: "string",
            default: "Archive Title"
        },
        subtitleText: {
            type: "string",
            default: "Archive Subtitle"
        },
        styles: {
            type: "object",
            default: {
                underline: {} satisfies UnderlineStyles
            } satisfies ArchiveHeaderStyles
        }
    },
    icon: archive,
    edit: EditComponent
});