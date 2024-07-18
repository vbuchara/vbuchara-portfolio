import { registerBlockType } from "@wordpress/blocks";
import { footer } from "@wordpress/icons";

import type { EditorMenuItemType } from "@components/editor-menu-item";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<FooterAttributesType>;

export type FooterAttributesType = {
    menuItems: EditorMenuItemType[]
};

registerBlockType<FooterAttributesType>(block.name, {
    ...block,
    attributes: {
        menuItems: {
            type: "array",
            default: []
        }
    },
    icon: footer,
    edit: EditComponent
});