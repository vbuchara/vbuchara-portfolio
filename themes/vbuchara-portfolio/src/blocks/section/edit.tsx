import { type BlockEditProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import merge from "lodash/merge";
import isEqual from "lodash/isEqual";

import { EditorWrapper } from "@components/editor-wrapper";
import { getGridSettingsVariables } from "@components/editor-grid-settings";
import { getBackgroundImageSettingVariables } from "@components/editor-background-image-settings";
import { getPaddingSettingsVariables } from "@components/editor-padding-settings";

import { useBlockDefaultAttributes } from "@hooks/useBlockDefaultAttributes";

import { SectionInspectorControls } from "./components/controls";

import { sectionAllowedBlocks } from "./allowed-blocks";
import type { SectionAttributesType } from "./section";

const { default: sectionBlock } = await import("./block.json") as BlockJsonDefault<SectionAttributesType>;

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
    
    const gridStyles = getGridSettingsVariables(styles.grid);
    const paddingStyles = getPaddingSettingsVariables(styles.padding);
    const backgroundImageStyles = getBackgroundImageSettingVariables(attributes.backgroundImage);

    return (
    <EditorWrapper>
        <SectionInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <div 
            className="site-section site-section--editor"
            style={{
                ...gridStyles,
                ...paddingStyles,
                ...backgroundImageStyles,
                "--min-height": styles.minHeight,
                "--background-color": styles.backgroundColor, 
                ...(!attributes.backgroundImage.backgroundImage && { "--background-image": styles.backgroundGradient }),
            }}
        >
            <InnerBlocks
                allowedBlocks={sectionAllowedBlocks}
            />
        </div>
    </EditorWrapper>
    );
}