import { useMemo } from "react";
import type { MultiValue } from "react-select";
import { 
    BlockControls, 
    InspectorControls,
} from "@wordpress/block-editor";
import { 
    BaseControl,
    PanelBody,
    PanelRow,
    TextControl,
    ToolbarGroup 
} from "@wordpress/components";

import FrontImageSrc from "@assets/images/front-image.png";

import { 
    type BreakpointsOption, 
    BreakpointsOptions 
} from "@constants/block-breakpoints";

import { 
    EditorMediaPicker,
    type EditorMediaPickerAttributes,
} from "@components/editor-media-picker";
import { EditorSelect } from "@components/editor-select";
import { EditorMetricsSettings, MetricsStyles } from "@components/editor-metrics-settings";
import { EditorPositionSettings, PositionStyles } from "@components/editor-position-settings";

import { getArrayDependency } from "@utils/getArrayDependency";

import { ImageEditComponentProps } from "../edit";

export type ImageControlsProps = Pick<
    ImageEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface ImageInspectorControlsProps extends ImageControlsProps {};

export function ImageInspectorControls({
    attributes,
    setAttributes,
}: ImageInspectorControlsProps){
    const hideImageAtBreakpointsDependency = getArrayDependency(attributes.hideImageAtBreakpoints);
    const hideImageAtBreakpointsSelected = useMemo(() => {
        return BreakpointsOptions.filter(option => {
            return attributes.hideImageAtBreakpoints.includes(option.value);
        });
    }, [hideImageAtBreakpointsDependency]);

    const mediaAttributes: EditorMediaPickerAttributes = {
        imageId: attributes.imageId,
        imageUrl: attributes.imageUrl,
        imageAlt: attributes.imageAlt
    };

    function setMediaAttributes(mediaAttributes: Partial<EditorMediaPickerAttributes>) {
        setAttributes({
           imageId: mediaAttributes.imageId,
           imageUrl: mediaAttributes.imageUrl,
           imageAlt: mediaAttributes.imageAlt
        });
    }

    function handleOnChangeHideImageAt(
        values: MultiValue<BreakpointsOption>
    ){
        setAttributes({
            hideImageAtBreakpoints: values.map(value => value.value)
        });
    }

    function handleOnChangeMetrics(metricStyles: MetricsStyles){
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

    return (
    <>
        <InspectorControls
            group="settings"
        >
            <PanelBody
                title="Settings"
                initialOpen={true}
            >
                <PanelRow>
                    <BaseControl
                        className="portfolio-image__editor-control"
                        label="Image Source"
                    >
                        <EditorMediaPicker
                            attributes={mediaAttributes}
                            setAttributes={setMediaAttributes}
                            defaultImage={FrontImageSrc}
                        />
                    </BaseControl>
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label="Alt Text"
                        value={attributes.imageAlt}
                        onChange={(value) => setAttributes({ imageAlt: value })}
                    />
                </PanelRow>
            </PanelBody>
            <PanelBody
                title="Exhibition"
                initialOpen={false}
            >
                <PanelRow>
                <BaseControl
                    className="portfolio-image__editor-control"
                    label="Hide Image At"
                >
                    <EditorSelect                   
                        type="select" 
                        isMulti={true}
                        options={BreakpointsOptions}
                        value={hideImageAtBreakpointsSelected}
                        onChange={handleOnChangeHideImageAt}
                    />
                </BaseControl>
                </PanelRow>
            </PanelBody>
        </InspectorControls>
        <InspectorControls
            group="styles"
        >
            <EditorMetricsSettings
                metrics={attributes.styles.metrics}
                setMetrics={handleOnChangeMetrics}
                title="Dimensions"
                initialOpen={false}
            />
            <EditorPositionSettings
                position={attributes.styles.position}
                setPosition={handleOnChangePosition}
                title="Position"
                initialOpen={false}
            />
        </InspectorControls>
    </>
    );
}

export interface ImageBlockControlsProps extends ImageControlsProps {};

export function ImageBlockControls({
    attributes,
    setAttributes
}: ImageBlockControlsProps){
    return (
    <BlockControls>
        <ToolbarGroup>
            Configuration here
        </ToolbarGroup>
    </BlockControls>
    );
}