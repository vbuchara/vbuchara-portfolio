import { registerBlockType } from "@wordpress/blocks";
import { footer } from "@wordpress/icons";

import { EditComponent } from "./edit";

const { default: block } = await import("./block.json") as BlockJsonDefault<FooterAttributesType>;

export type FooterAttributesType = {};

registerBlockType<FooterAttributesType>(block.name, {
    ...block,
    attributes: {},
    icon: footer,
    edit: EditComponent
});