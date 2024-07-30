

import { type BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

export type SectionSaveComponentProps = BlockSaveProps<{}>;

export function SaveComponent(props: SectionSaveComponentProps){
    return (<InnerBlocks.Content/>);
}