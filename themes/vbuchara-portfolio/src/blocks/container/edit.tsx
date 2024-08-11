import { type BlockEditProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import clsx from "clsx";

import { ReactComponent as Blob1 } from "@assets/svgs/blob-1.svg";
import { ReactComponent as Blob2 } from "@assets/svgs/blob-2.svg";

import { EditorWrapper } from "@components/editor-wrapper";
import { getPositionSettingsVariables } from "@components/editor-position-settings";
import { getMetricSettingsVariables } from "@components/editor-metrics-settings";
import { getGridSettingsVariables } from "@components/editor-grid-settings";
import { getPaddingSettingsVariables } from "@components/editor-padding-settings";

import { ContainerBlockControls, ContainerInspectorControls } from "./components/controls";

import type { BlobBackgroundType, ContainerAttributesType } from "./container";

export type ContainerEditComponentProps = BlockEditProps<ContainerAttributesType>;

const { default: welcomeContainerBlock } = await import("@blocks/welcome-container/block.json") as BlockJsonDefault;
const { default: containerBlock } = await import("@blocks/container/block.json") as BlockJsonDefault;
const { default: imageBlock } = await import("@blocks/image/block.json") as BlockJsonDefault;
const { default: headingBlock } = await import("@blocks/heading/block.json") as BlockJsonDefault;
const { default: paragraphBlock } = await import("@blocks/paragraph/block.json") as BlockJsonDefault;
const { default: buttonBlock } = await import("@blocks/button/block.json") as BlockJsonDefault;
const { default: skillsBlock } = await import("@blocks/skills/block.json") as BlockJsonDefault;
const { default: projectsBlock } = await import("@blocks/projects/block.json") as BlockJsonDefault;

export function EditComponent(props: ContainerEditComponentProps){
    const { attributes, setAttributes, className } = props;
    const { styles } = attributes;

    const mainDivClasses = clsx({
        "portfolio-container": true,
        "portfolio-container--editor": true
    });

    const blobBackgrounds = {
        welcome: <Blob1/>,
        about: <Blob2 preserveAspectRatio="none" />,
        none: ""
    } as Record<BlobBackgroundType, React.ReactNode>;

    const metricsStyles = getMetricSettingsVariables(styles.metrics);
    const positionStyles = getPositionSettingsVariables(styles.position);
    const gridStyles = getGridSettingsVariables(styles.grid);
    const paddingStyles = getPaddingSettingsVariables(styles.padding);

    return (
    <EditorWrapper
        style={{
            ...positionStyles
        }}
    >
        <ContainerInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <ContainerBlockControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <div 
            className={mainDivClasses}
            style={{
                ...metricsStyles,
                ...positionStyles,
            }}
        >
            {attributes.blobBackgroundType === "none" ? blobBackgrounds.none : (
            <div className="portfolio-container__background">
                {blobBackgrounds[attributes.blobBackgroundType]}
            </div>
            )}
            <div 
                className="portfolio-container__content"
                style={{
                    ...gridStyles,
                    ...paddingStyles
                }}
            >
                <InnerBlocks
                    allowedBlocks={[
                        welcomeContainerBlock.name,
                        containerBlock.name,
                        imageBlock.name,
                        headingBlock.name,
                        paragraphBlock.name,
                        buttonBlock.name,
                        skillsBlock.name,
                        projectsBlock.name
                    ]}
                />
            </div>
        </div>
    </EditorWrapper>
    );
}