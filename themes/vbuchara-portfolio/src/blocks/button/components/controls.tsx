import { useRef } from "react";
import { 
    BlockControls, 
    InspectorControls,
    __experimentalPanelColorGradientSettings as PanelColorGradientSettings
} from "@wordpress/block-editor";
import { 
    BaseControl,
    PanelBody,
    PanelRow,
    TextControl,
    ToolbarGroup 
} from "@wordpress/components";

import { ButtonEditComponentProps } from "../edit";

import { SelectLinkControl } from "./select-link-control";

export type ButtonControlsProps = Pick<
    ButtonEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface ButtonInspectorControlsProps extends ButtonControlsProps {};

export function ButtonInspectorControls({
    attributes,
    setAttributes,
}: ButtonInspectorControlsProps){
    const isChangingButtonBackground = useRef(false);
    const isChangingButtonBorder = useRef(false);

    function onTextColorChange(value: string){
        setAttributes({ 
            styles: {
                ...attributes.styles,
                color: value,
            } 
        })
    }

    function onBackgroundColorChange(value: string){
        if(!value && isChangingButtonBackground.current) {
            isChangingButtonBackground.current = false;
            return;
        };

        setAttributes({ 
            styles: {
                ...attributes.styles,
                backgroundColor: value,
                backgroundGradient: undefined
            } 
        })
        isChangingButtonBackground.current = true;
    }

    function onBackgroundGradientChange(value: string){
        if(!value && isChangingButtonBackground.current) {
            isChangingButtonBackground.current = false;
            return;
        };

        setAttributes({
            styles: {
                ...attributes.styles,
                backgroundColor: undefined,
                backgroundGradient: value
            }
        })
        isChangingButtonBackground.current = true;
    }

    function onBorderColorChange(value: string){
        if(!value) {
            isChangingButtonBorder.current = false;
            return;
        };

        setAttributes({ 
            styles: {
                ...attributes.styles,
                borderColor: value,
                borderGradient: "unset"
            } 
        })
        isChangingButtonBorder.current = true;
    }

    return (
    <>
        <InspectorControls>
            <PanelBody
                title="Settings"
                initialOpen={true}
            >
                <PanelRow>
                    <SelectLinkControl
                        attributes={attributes}
                        setAttributes={setAttributes}
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
        <InspectorControls
            group="styles"
        >
            <PanelColorGradientSettings
                title="Colors"
                settings={[
                    {
                        label: "Text Color",
                        colorValue: attributes.styles.color,
                        onColorChange: onTextColorChange,
                        disableCustomGradients: true
                    },
                    {
                        label: "Background Color",
                        colorValue: attributes.styles.backgroundColor,
                        gradientValue: attributes.styles.backgroundGradient,
                        onColorChange: onBackgroundColorChange,
                        onGradientChange: onBackgroundGradientChange,
                    },
                    {
                        label: "Border Color",
                        colorValue: attributes.styles.borderColor,
                        onColorChange: onBorderColorChange,
                        disableCustomGradients: true
                    }
                ]}
                __experimentalIsRenderedInSidebar={true}
            />
            <PanelBody
                title="Border"
                initialOpen={true}
            >
                <PanelRow>
                    <TextControl
                        label="Border Width"
                        value={attributes.styles.borderWidth}
                        onChange={(value) => setAttributes({
                            styles: {
                               ...attributes.styles,
                                borderWidth: value
                            }
                        })}
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    </>
    );
}

export interface ButtonBlockControlsProps extends ButtonControlsProps {};

export function ButtonBlockControls({
    attributes,
    setAttributes
}: ButtonBlockControlsProps){
    return (
    <BlockControls>
        <ToolbarGroup>
            Configuration here
        </ToolbarGroup>
    </BlockControls>
    );
}