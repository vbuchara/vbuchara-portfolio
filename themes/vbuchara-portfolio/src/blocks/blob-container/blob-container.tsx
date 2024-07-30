import "./edit.scss";
import "./style.scss";

import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Container } from "@assets/svgs/container.svg";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

const { default: block } = await import("./block.json") as BlockJsonDefault<BlobContainerAttributesType>;
const { default: sectionBlock }  = await import("@blocks/section/block.json") as BlockJsonDefault;

export type BlobContainerAttributesType = {};

registerBlockType<BlobContainerAttributesType>(block.name, {
    ...block,
    attributes: {},
    icon: () => <Container color="inherit"/>,
    edit: EditComponent,
    save: SaveComponent,
    ancestor: [sectionBlock.name]
});