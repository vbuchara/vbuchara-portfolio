import { type BlockEditProps } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

import { EditorWrapper } from "@components/editor-wrapper";

import { ArchiveHeaderBlockControls } from "./components/controls";

import type { ArchiveHeaderAttributesType } from "./archive-header";

export type ArchiveHeaderEditComponentProps = BlockEditProps<ArchiveHeaderAttributesType>;

export function EditComponent(props: ArchiveHeaderEditComponentProps){
    const { attributes, setAttributes } = props;
    const { styles } = attributes;

    return (
    <EditorWrapper>
        <ArchiveHeaderBlockControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <div className="portfolio-archive-header">
            <RichText
                tagName="h1"
                className="portfolio-archive-header__title"
                allowedFormats={["core/italic", "core/bold", "vbuchara-portfolio/text-color"]}
                value={attributes.titleText}
                onChange={(value) => setAttributes({ titleText: value })}
                style={{
                    "--underline-color": styles.underline.underlineColor || undefined,
                    "--underline-image": styles.underline.underlineGradient || undefined
                }}
            />
            <RichText
                tagName="h3"
                className="portfolio-archive-header__subtitle"
                allowedFormats={["core/italic", "core/bold", "vbuchara-portfolio/text-color"]}
                value={attributes.subtitleText}
                onChange={(value) => setAttributes({ subtitleText: value })}
            />
        </div>
    </EditorWrapper>
    );
}