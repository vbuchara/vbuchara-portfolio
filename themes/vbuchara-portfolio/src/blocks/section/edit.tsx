import { type BlockEditProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import merge from "lodash/merge";
import isEqual from "lodash/isEqual";

import { EditorWrapper } from "@components/editor-wrapper";

import { useBlockDefaultAttributes } from "@hooks/useBlockDefaultAttributes";

import { SectionInspectorControls } from "./components/controls";

import type { SectionAttributesType } from "./section";

const { default: sectionBlock } = await import("./block.json") as BlockJsonDefault<SectionAttributesType>;
const { default: blobContainerBlock } = await import("@blocks/blob-container/block.json") as BlockJsonDefault;
const { default: imageBlock } = await import("@blocks/image/block.json") as BlockJsonDefault;

export type SectionEditComponentProps = BlockEditProps<SectionAttributesType>;

export function EditComponent(props: SectionEditComponentProps){
    const { attributes, setAttributes } = props;
    const { styles } = attributes;

    const defaultAttributes = useBlockDefaultAttributes<Readonly<SectionAttributesType>>(sectionBlock.name);

    if(!defaultAttributes) return null;
    if(!isEqual(Object.keys(defaultAttributes), Object.keys(attributes))) {

        setAttributes(merge(defaultAttributes, props.attributes));
        return null;
    };

    return (
    <EditorWrapper>
        <SectionInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <div 
            className="site-section site-section--editor"
            style={{
                "--grid-template-columns": styles.grid.gridTemplateColumns,
                "--grid-template-rows": styles.grid.gridTemplateRows,
                "--grid-auto-flow": styles.grid.gridAutoFlow,
                "--grid-auto-columns": styles.grid.gridAutoColumns,
                "--grid-auto-rows": styles.grid.gridAutoRows,
                "--row-gap": styles.grid.rowGap,
                "--column-gap": styles.grid.columnGap,
                "--justify-content": styles.grid.justifyContent,
                "--justify-items": styles.grid.justifyItems,
                "--align-content": styles.grid.alignContent,
                "--align-items": styles.grid.alignItems,
                ...(styles.padding.paddingBlock && { "--padding-block": styles.padding.paddingBlock } ),
                ...(styles.padding.paddingInline && { "--padding-inline": styles.padding.paddingInline } ),
                ...(styles.padding.paddingBlockStart && { "--padding-block-start": styles.padding.paddingBlockStart }),
                ...(styles.padding.paddingBlockEnd && { "--padding-block-start": styles.padding.paddingBlockEnd }),
                ...(styles.padding.paddingInlineStart && { "--padding-inline-start": styles.padding.paddingInlineStart }),
                ...(styles.padding.paddingInlineEnd && { "--padding-inline-end": styles.padding.paddingInlineEnd }),
                "--min-height": styles.minHeight,
            }}
        >
            <InnerBlocks
                allowedBlocks={[
                    blobContainerBlock.name,
                    imageBlock.name
                ]}
            />
        </div>
    </EditorWrapper>
    );
}