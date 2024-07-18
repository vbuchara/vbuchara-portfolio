
import { type BlockEditProps } from "@wordpress/blocks";

import { EditorWrapper } from "@components/editor-wrapper";

import type { FooterAttributesType } from "./footer";

export type FooterEditComponentProps = BlockEditProps<FooterAttributesType>;

export function EditComponent(props: FooterEditComponentProps){
    const { attributes, setAttributes } = props;

    return (
    <EditorWrapper>
        Footer Edit Component
    </EditorWrapper>
    );
}