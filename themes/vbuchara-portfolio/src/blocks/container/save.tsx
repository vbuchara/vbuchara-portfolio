import { type BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

import type { ContainerAttributesType } from "./container";

export type ContainerSaveComponentProps = BlockSaveProps<ContainerAttributesType>;

export function SaveComponent(props: ContainerSaveComponentProps){
    return (<InnerBlocks.Content/>);
}