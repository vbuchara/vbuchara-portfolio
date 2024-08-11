import "./edit.scss";
import "./style.scss";

import { registerBlockType } from "@wordpress/blocks";

import { ReactComponent as Container } from "@assets/svgs/container.svg";

import { EditComponent } from "./edit";
import { SaveComponent } from "./save";

const { default: block } = await import("./block.json") as BlockJsonDefault<WelcomeContainerAttributesType>;
const { default: sectionBlock }  = await import("@blocks/section/block.json") as BlockJsonDefault;

export type WelcomeContainerAttributesType = {};

registerBlockType<WelcomeContainerAttributesType>(block.name, {
    ...block,
    attributes: {},
    icon: () => <Container color="inherit"/>,
    edit: EditComponent,
    save: SaveComponent,
    ancestor: [sectionBlock.name]
});