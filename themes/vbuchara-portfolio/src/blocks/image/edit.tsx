import { type BlockEditProps } from "@wordpress/blocks";

import type { BreakpointsValue } from "@constants/block-breakpoints";

import { EditorWrapper } from "@components/editor-wrapper";

import { ImageInspectorControls } from "./components/controls";

import type { ImageAttributesType } from "./image";

export type ImageEditComponentProps = BlockEditProps<ImageAttributesType>;

export function EditComponent(props: ImageEditComponentProps){
    const { attributes, setAttributes } = props;

    function isHideImageBreakpointActive(breakpoint: BreakpointsValue){
        return attributes.hideImageAtBreakpoints.includes(breakpoint) ? true : undefined;
    }

    return (
    <EditorWrapper>
        <ImageInspectorControls
            attributes={attributes}
            setAttributes={setAttributes}
        />
        <img
            className="portfolio-image"
            src={attributes.imageUrl}
            alt={attributes.imageAlt}
            data-hide-on-xxs={isHideImageBreakpointActive("xxs")}
            data-hide-on-xs={isHideImageBreakpointActive("xs")}
            data-hide-on-sm={isHideImageBreakpointActive("sm")}
            data-hide-on-md={isHideImageBreakpointActive("md")}
            data-hide-on-lg={isHideImageBreakpointActive("lg")}
            data-hide-on-xl={isHideImageBreakpointActive("xl")}
            data-hide-on-xxl={isHideImageBreakpointActive("xxl")}
        />
    </EditorWrapper>
    );
}