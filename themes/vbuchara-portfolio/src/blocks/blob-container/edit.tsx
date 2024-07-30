import { type BlockEditProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

import { ReactComponent as Blob1 } from "@assets/svgs/blob-1.svg";

import type { ButtonAttributesType } from "@blocks/button/button";
import type { HeadingAttributesType } from "@blocks/heading/heading";
import type { ParagraphAttributesType } from "@blocks/paragraph/paragraph";

import { EditorWrapper } from "@components/editor-wrapper";

const { default: headingBlock } = await import("@blocks/heading/block.json") as BlockJsonDefault;
const { default: paragraphBlock } = await import("@blocks/paragraph/block.json") as BlockJsonDefault;
const { default: buttonBlock } = await import("@blocks/button/block.json") as BlockJsonDefault;

export type BlobContainerEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: BlobContainerEditComponentProps){
    const { attributes, setAttributes } = props;

    return (
    <EditorWrapper>
        <div className="blob-container">
            <div className="blob-container__background">
                <Blob1/>
            </div>
            <InnerBlocks
                allowedBlocks={[
                    headingBlock.name,
                    paragraphBlock.name,
                    buttonBlock.name,
                ]}
                template={[
                    [headingBlock.name, { 
                        textContent: "Welcome Headline",
                        tagName: "h1",
                        textAlignment: "center",
                        extraClasses: ["blob-container__heading-1"],
                    } as HeadingAttributesType],
                    [headingBlock.name, {
                        textContent: "Welcome Subtitle",
                        tagName: "h3",
                        textAlignment: "center",
                        extraClasses: ["blob-container__heading-2"],
                    } as HeadingAttributesType],
                    [paragraphBlock.name, {
                        textContent: "Welcome Paragraph",
                        extraClasses: ["blob-container__paragraph"],
                    } as ParagraphAttributesType],
                    [buttonBlock.name, {
                        textContent: "Click Me",
                        extraClasses: ["blob-container__button"],
                    } as ButtonAttributesType]
                ]}
                templateLock="all"
            />
        </div>
    </EditorWrapper>
    );
}