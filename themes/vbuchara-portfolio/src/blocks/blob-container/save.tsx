

import { type BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

export type BlobContainerSaveComponentProps = BlockSaveProps<{}>;

export function SaveComponent(props: BlobContainerSaveComponentProps){
    return (<InnerBlocks.Content/>);
}