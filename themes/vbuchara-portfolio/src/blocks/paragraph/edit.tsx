import { type BlockEditProps } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

import { EditorWrapper } from "@components/editor-wrapper";

import { ParagraphInspectorControls } from "./components/controls";

import type { ParagraphAttributesType } from "./paragraph";

export type ParagraphEditComponentProps = BlockEditProps<ParagraphAttributesType>;

export function EditComponent(props: ParagraphEditComponentProps){
    const { attributes, setAttributes } = props;

    const extraClasses = attributes.extraClasses.join(" ");

    return (
    <EditorWrapper
        className={extraClasses}
    >
        <ParagraphInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <RichText
            tagName="p"
            className={`portfolio-paragraph ${extraClasses}`}
            placeholder="Enter your paragraph text..."
            value={attributes.textContent}
            onChange={(value) => setAttributes({ textContent: value })}
            style={{
                ...(attributes.styles.color ? {
                    "--color": attributes.styles.color
                } : {}),
                ...(attributes.styles.fontSize? {
                    "--font-size": attributes.styles.fontSize
                } : {})
            }}
        />
    </EditorWrapper>
    );
}