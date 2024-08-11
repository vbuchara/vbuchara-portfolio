import { type BlockEditProps } from "@wordpress/blocks";

import type { BreakpointsValue } from "@constants/block-breakpoints";

import { EditorWrapper } from "@components/editor-wrapper";
import { getPositionSettingsVariables } from "@components/editor-position-settings";
import { getMetricSettingsVariables } from "@components/editor-metrics-settings";

import { ImageInspectorControls } from "./components/controls";

import type { ImageAttributesType } from "./image";

export type ImageEditComponentProps = BlockEditProps<ImageAttributesType>;

export function EditComponent(props: ImageEditComponentProps){
    const { attributes, setAttributes } = props;
    const { styles } = attributes;


    function isHideImageBreakpointActive(breakpoint: BreakpointsValue){
        return attributes.hideImageAtBreakpoints.includes(breakpoint) ? true : undefined;
    }

    const metricsStyles = getMetricSettingsVariables(styles.metrics);
    const positionStyles = getPositionSettingsVariables(styles.position);

    return (
    <EditorWrapper
        style={{
            ...positionStyles
        }}
    >
        <ImageInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <img
            className="portfolio-image portfolio-image--editor"
            src={attributes.imageUrl}
            alt={attributes.imageAlt}
            data-hide-on-xxs={isHideImageBreakpointActive("xxs")}
            data-hide-on-xs={isHideImageBreakpointActive("xs")}
            data-hide-on-sm={isHideImageBreakpointActive("sm")}
            data-hide-on-md={isHideImageBreakpointActive("md")}
            data-hide-on-lg={isHideImageBreakpointActive("lg")}
            data-hide-on-xl={isHideImageBreakpointActive("xl")}
            data-hide-on-xxl={isHideImageBreakpointActive("xxl")}
            style={{
                ...metricsStyles,
                ...positionStyles
            }}
        />
    </EditorWrapper>
    );
}