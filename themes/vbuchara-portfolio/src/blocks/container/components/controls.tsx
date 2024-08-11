import { 
    BlockControls, 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    PanelBody,
    PanelRow,
    ToolbarDropdownMenu,
    ToolbarGroup 
} from "@wordpress/components";

import { ReactComponent as Blob1 } from "@assets/svgs/blob-1.svg";
import { ReactComponent as Blob2 } from "@assets/svgs/blob-2.svg";
import { ReactComponent as None } from "@assets/svgs/none.svg";

import { EditorMetricsSettings, MetricsStyles } from "@components/editor-metrics-settings";
import { EditorPositionSettings, PositionStyles } from "@components/editor-position-settings";
import { EditorGridSettings, GridStyles } from "@components/editor-grid-settings";
import { EditorPaddingSettings, PaddingStyles } from "@components/editor-padding-settings";

import type { ContainerEditComponentProps } from "../edit";
import type { BlobBackgroundType } from "../container";

export type ContainerControlsProps = Pick<
    ContainerEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface ContainerInspectorControlsProps extends ContainerControlsProps {};

export function ContainerInspectorControls({
    attributes,
    setAttributes,
}: ContainerInspectorControlsProps){

    function handleOnChangeMetrics(metricStyles: MetricsStyles) {
        setAttributes({
            styles: {
                ...attributes.styles,
                metrics: {
                    ...attributes.styles.metrics,
                    ...metricStyles
                },
            }
        });
    }

    function handleOnChangePosition(positionStyles: PositionStyles){
        setAttributes({
            styles: {
                ...attributes.styles,
                position: {
                    ...attributes.styles.position,
                    ...positionStyles
                },
            }
        });
    }

    function handleOnChangeGrid(gridStyles: GridStyles){
        setAttributes({
            styles: {
                ...attributes.styles,
                grid: {
                    ...attributes.styles.grid,
                    ...gridStyles
                },
            }
        });
    }

    function handleOnChangePadding(paddingStyles: PaddingStyles){
        setAttributes({
            styles: {
                ...attributes.styles,
                padding: {
                    ...attributes.styles.padding,
                    ...paddingStyles
                },
            }
        });
    }

    return (
    <InspectorControls>
        <EditorMetricsSettings
            metrics={attributes.styles.metrics}
            setMetrics={handleOnChangeMetrics}
            title="Dimensions"
            initialOpen={false}
        />
        <EditorPaddingSettings
            padding={attributes.styles.padding}
            setPadding={handleOnChangePadding}
            title="Padding"
            initialOpen={false}
        />
        <EditorPositionSettings
            position={attributes.styles.position}
            setPosition={handleOnChangePosition}
            title="Position"
            initialOpen={false}
        />
        <EditorGridSettings
            grid={attributes.styles.grid}
            setGrid={handleOnChangeGrid}
            title="Grid"
            initialOpen={false}
        />
    </InspectorControls>
    );
}

export interface ContainerBlockControlsProps extends ContainerControlsProps {};

export function ContainerBlockControls({
    attributes,
    setAttributes
}: ContainerBlockControlsProps){
    const blobBackgrounds = {
        welcome: <Blob1 color="inherit" style={{ width: 24, height: 24 }} />,
        about: <Blob2 color="inherit" style={{ width: 24, height: 24 }} />,
        none: <None color="inherit" style={{ width: 24, height: 24 }} />
    } as Record<BlobBackgroundType, React.JSX.Element>;

    return (
    <BlockControls>
        <ToolbarGroup>
            <ToolbarDropdownMenu
                label="Blob Background"
                icon={blobBackgrounds[attributes.blobBackgroundType]}
                controls={[
                    {
                        title: "Welcome Blob",
                        icon: blobBackgrounds.welcome,
                        onClick: () => setAttributes({ blobBackgroundType: "welcome" }),
                    },
                    {
                        title: "About Blob",
                        icon: blobBackgrounds.about,
                        onClick: () => setAttributes({ blobBackgroundType: "about" }),
                    },
                    {
                        title: "None",
                        icon: blobBackgrounds.none,
                        onClick: () => setAttributes({ blobBackgroundType: "none" }),
                    }
                ]}
            />
        </ToolbarGroup>
    </BlockControls>
    );
}