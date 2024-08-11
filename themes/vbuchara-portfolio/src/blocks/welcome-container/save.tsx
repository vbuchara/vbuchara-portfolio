

import { type BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

export type WelcomeContainerSaveComponentProps = BlockSaveProps<{}>;

export function SaveComponent(props: WelcomeContainerSaveComponentProps){
    return (<InnerBlocks.Content/>);
}