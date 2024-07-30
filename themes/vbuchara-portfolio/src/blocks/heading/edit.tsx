import { useMemo } from "react";
import { type BlockEditProps } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

import { EditorWrapper } from "@components/editor-wrapper";

import { HeadingBlockControls, HeadingInspectorControls } from "./components/controls";

import type { HeadingAttributesType } from "./heading";

export type HeadingEditComponentProps = BlockEditProps<HeadingAttributesType>;

export function EditComponent(props: HeadingEditComponentProps){
    const { attributes, setAttributes } = props;

    const extraClasses = attributes.extraClasses.join(" ");
    
    return (
    <EditorWrapper
        className={extraClasses}
    >
        <HeadingInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <HeadingBlockControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <RichText
            tagName={attributes.tagName}
            className={`portfolio-heading ${extraClasses}`}
            allowedFormats={["core/italic", "core/bold", "vbuchara-portfolio/text-color"]}
            value={attributes.textContent}
            onChange={(value) => setAttributes({ textContent: value})}
            style={{
                "--text-align": attributes.textAlignment,
                "--line-height": attributes.styles.lineHeight,
                "--white-space": attributes.styles.whiteSpace,
            }}
        />
    </EditorWrapper>
    );
}