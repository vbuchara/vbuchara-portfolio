import { type BlockEditProps } from "@wordpress/blocks";

import { 
    RichText,
    useBlockProps,
} from "@wordpress/block-editor";
import { EditorWrapper } from "@components/editor-wrapper";

import { ButtonInspectorControls } from "./components/controls";

import type { ButtonAttributesType } from "./button";

export type ButtonEditComponentProps = BlockEditProps<ButtonAttributesType>;

export function EditComponent(props: ButtonEditComponentProps){
    const { attributes, setAttributes, context } = props;

    const extraClasses = attributes.extraClasses.join(" ");

    return (
    <EditorWrapper
        className={extraClasses}
    >
        <ButtonInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <RichText
            tagName="a"
            className={`portfolio-button ${extraClasses}`}
            allowedFormats={["core/bold", "core/italic"]}
            value={attributes.textContent}
            onChange={(value) => setAttributes({ textContent: value })}
            style={{
                "--color": attributes.styles.color,
                "--border-width": attributes.styles.borderWidth,
                ...(attributes.styles.backgroundColor ? {
                    "--background-color": attributes.styles.backgroundColor,
                } : {}),
                ...(attributes.styles.backgroundGradient ? {
                    "--background-image": attributes.styles.backgroundGradient,
                } : {}),
                ...(attributes.styles.borderColor ? {
                    "--border-color": attributes.styles.borderColor,
                } : {}),
                ...(attributes.styles.borderGradient ? {
                    "--border-image-source": attributes.styles.borderGradient,
                } : {})
            }}
        />
    </EditorWrapper>
    );
}