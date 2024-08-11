import { useRef } from "react";
import { 
    BlockControls, 
    InspectorControls,
    __experimentalPanelColorGradientSettings as PanelColorGradientSettings
} from "@wordpress/block-editor";
import { 
    PanelBody,
    PanelRow,
    TextControl,
    ToolbarGroup 
} from "@wordpress/components";

import { BackgroundImageStyles, EditorBackgroundImageSettings } from "@components/editor-background-image-settings";
import { EditorGridSettings, GridStyles } from "@components/editor-grid-settings";

import type { SectionEditComponentProps } from "../edit";
import type { SectionPaddingStyles } from "../section";
import { isEmptyString } from "@src/utils/isEmptyString";

export type SectionControlsProps = Pick<
    SectionEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface SectionInspectorControlsProps extends SectionControlsProps {};

export function SectionInspectorControls({
    attributes,
    setAttributes,
}: SectionInspectorControlsProps){
    const isChangingBackgroundColor = useRef(false);

    function handleSetSectionGrid(grid: Partial<GridStyles>){
        setAttributes({
            styles: {
                ...attributes.styles,
                grid: {
                   ...attributes.styles.grid,
                   ...grid
                }
            }
        });
    }

    function getHandleOnChangeTextPaddingStyle(
        property: keyof SectionPaddingStyles
    ){
        return (value: string) => {
            setAttributes({
                styles: {
                   ...attributes.styles,
                    padding: {
                        ...attributes.styles.padding,
                        [property]: value
                    }
                }
            });
        };
    }

    function handleSetBackgroundImageStyles(newBackgroundImageStyles: Partial<BackgroundImageStyles>){
        const {
            backgroundImage,
            ...otherProperties
        } = newBackgroundImageStyles;

        setAttributes({
            backgroundImage: {
                ...attributes.backgroundImage,
                ...otherProperties,
                backgroundImage: isEmptyString(backgroundImage) ? undefined : attributes.backgroundImage.backgroundImage,
                ...(backgroundImage && { backgroundImage: `url(${backgroundImage})` })
            }
        });
    }

    function handleOnChangeBackgroundColor(color?: string){
        if(!color && isChangingBackgroundColor.current){
            isChangingBackgroundColor.current = false;
            return;
        }

        setAttributes({
            styles: {
                ...attributes.styles,
                backgroundColor: color,
                backgroundGradient: undefined
            }
        });
        isChangingBackgroundColor.current = true;
    }

    function handleOnChangeBackgroundGradient(gradient?: string){
        if(!gradient && isChangingBackgroundColor.current){
            isChangingBackgroundColor.current = false;
            return;
        }

        setAttributes({
            styles: {
                ...attributes.styles,
                backgroundColor: undefined,
                backgroundGradient: gradient
            }
        });
        isChangingBackgroundColor.current = true;
    }

    return (
    <>
        <InspectorControls
            group="settings"
        >
            <EditorBackgroundImageSettings
                backgroundImageStyles={attributes.backgroundImage}
                setBackgroundImageStyles={handleSetBackgroundImageStyles}
                title="Background Image"
                initialOpen={true}
                mediaPickerProps={{
                    defaultToClear: true,
                    sizePriority: ["full"]
                }}
            />
        </InspectorControls>
        <InspectorControls
            group="styles"
        >
            <PanelColorGradientSettings
                title="Colors"
                initialOpen={true}
                settings={[
                    {
                        label: "Background Color",
                        colorValue: attributes.styles.backgroundColor,
                        gradientValue: attributes.styles.backgroundGradient,
                        onColorChange: handleOnChangeBackgroundColor,
                        onGradientChange: handleOnChangeBackgroundGradient,
                    }
                ]}
                __experimentalIsRenderedInSidebar={true}
            />
            <PanelBody
                title="Dimensions"
                initialOpen={true}
            >
                <PanelRow>
                    <TextControl
                        label="Min Height"
                        value={attributes.styles.minHeight}
                        onChange={(value) => setAttributes({ 
                            ...attributes.styles,
                            styles: {
                                ...attributes.styles,
                                minHeight: value
                            }
                        })}
                    />
                </PanelRow>
            </PanelBody>
            <PanelBody
                title="Padding"
                initialOpen={false}
            >
                <PanelRow>
                    <TextControl
                        label="Block (Top and Bottom)"
                        value={attributes.styles.padding.paddingBlock || ""}
                        onChange={getHandleOnChangeTextPaddingStyle("paddingBlock")}
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label="Inline (Left and Right)"
                        value={attributes.styles.padding.paddingInline || ""}
                        onChange={getHandleOnChangeTextPaddingStyle("paddingInline")}
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label="Block Start (Top)"
                        value={attributes.styles.padding.paddingBlockStart || ""}
                        onChange={getHandleOnChangeTextPaddingStyle("paddingBlockStart")}
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label="Block End (Bottom)"
                        value={attributes.styles.padding.paddingBlockEnd || ""}
                        onChange={getHandleOnChangeTextPaddingStyle("paddingBlockEnd")}
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label="Inline Start (Left)"
                        value={attributes.styles.padding.paddingInlineStart || ""}
                        onChange={getHandleOnChangeTextPaddingStyle("paddingInlineStart")}
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label="Inline End (Right)"
                        value={attributes.styles.padding.paddingInlineEnd || ""}
                        onChange={getHandleOnChangeTextPaddingStyle("paddingInlineEnd")}
                    />
                </PanelRow>
            </PanelBody>
            <EditorGridSettings
                grid={attributes.styles.grid}
                setGrid={handleSetSectionGrid}
                initialOpen={false}
            />
        </InspectorControls>
    </>
    );
}

export interface SectionBlockControlsProps extends SectionControlsProps {};

export function SectionBlockControls({
    attributes,
    setAttributes
}: SectionBlockControlsProps){
    return (
    <BlockControls>
        <ToolbarGroup>
            Configuration here
        </ToolbarGroup>
    </BlockControls>
    );
}