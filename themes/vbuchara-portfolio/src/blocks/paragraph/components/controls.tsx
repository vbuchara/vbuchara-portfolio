import { 
    BlockControls, 
    InspectorControls,
    PanelColorSettings
} from "@wordpress/block-editor";
import { 
    FontSizePicker,
    PanelBody,
    PanelRow,
    ToolbarGroup 
} from "@wordpress/components";

import { ParagraphEditComponentProps } from "../edit";

export type ParagraphControlsProps = Pick<
    ParagraphEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface ParagraphInspectorControlsProps extends ParagraphControlsProps {};

export function ParagraphInspectorControls({
    attributes,
    setAttributes,
}: ParagraphInspectorControlsProps){
    return (
    <InspectorControls
        group="styles"
    >
        <PanelColorSettings
            title="Colors"
            colorSettings={[
                {
                    label: "Text Color",
                    value: attributes.styles.color,
                    onChange: (value) => setAttributes({
                        styles: {
                            ...attributes.styles,
                            color: value
                        }
                    }),
                }
            ]}
            __experimentalIsRenderedInSidebar={true}
        />
        <PanelBody
            title="Typography"
            initialOpen={true}
        >
            <PanelRow>
                <FontSizePicker
                    fontSizes={[
                        {
                            name: "Small",
                            slug: "small",
                            size: "var(--font-size-sm)",
                        },
                        {
                            name: "Medium",
                            slug: "medium",
                            size: "var(--font-size-md)"
                        },
                        {
                            name: "Large",
                            slug: "large",
                            size: "var(--font-size-lg)"
                        },
                        {
                            name: "Extra Large",
                            slug: "extra-large",
                            size: "var(--font-size-xl)"
                        },
                        {
                            name: "Extra Extra Large",
                            slug: "extra-extra-large",
                            size: "var(--font-size-xxl)"
                        }
                    ]}
                    value={attributes.styles.fontSize}
                    onChange={(value: string) => setAttributes({
                        styles: {
                           ...attributes.styles,
                            fontSize: value
                        }
                    })}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}

export interface ParagraphBlockControlsProps extends ParagraphControlsProps {};

export function ParagraphBlockControls({
    attributes,
    setAttributes
}: ParagraphBlockControlsProps){
    return (
    <BlockControls>
        <ToolbarGroup>
            Configuration here
        </ToolbarGroup>
    </BlockControls>
    );
}