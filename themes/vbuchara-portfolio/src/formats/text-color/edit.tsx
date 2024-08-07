import { useMemo, useState } from "react";
import { 
    ColorPalette, 
    store as blockEditorStore
} from "@wordpress/block-editor";
import { 
    Fill, 
    GradientPicker, 
    Popover, 
    TabPanel, 
    ToolbarButton 
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { 
    RichTextEditComponentProps,   
    removeFormat,
    applyFormat,
} from "@wordpress/rich-text";

import { ReactComponent as Color } from "@assets/svgs/color.svg";

import type { TextColorAttributes } from "./text-color";
import { EditorColorGradientPicker } from "@src/components/editor-color-gradient-picker";

export type TextColorEditComponentProps = RichTextEditComponentProps<TextColorAttributes>;

export function TextColorEditComponent(props: TextColorEditComponentProps){
    const [showPopover, setShowPopover] = useState(false);
    
    const colorSelected = useMemo(() => {
        const dummyDiv = document.createElement("div");
        dummyDiv.style.cssText = props.activeAttributes.style;
        
        const colorProperty = dummyDiv.style.getPropertyValue("--color");

        return colorProperty;
    }, [
        props.value.start, 
        props.value.end, 
        props.isActive,
        props.activeAttributes.style
    ]);
    const gradientSelected = useMemo(() => {
        const dummyDiv = document.createElement("div");
        dummyDiv.style.cssText = props.activeAttributes.style;

        const backgroundImageProperty = dummyDiv.style.getPropertyValue("--background-image");

        return backgroundImageProperty ? backgroundImageProperty : undefined;
    }, [
        props.value.start, 
        props.value.end, 
        props.isActive,
        props.activeAttributes.style
    ]);
    
    function handleOnColorChange(color?: string){        
        const removedValue = removeFormat(
            props.value, "vbuchara-portfolio/text-color", props.value.start, props.value.end
        );
        props.onChange(removedValue);

        if(!color) return; 

        const newValue = applyFormat<TextColorAttributes>(props.value, {
            type: "vbuchara-portfolio/text-color",
            attributes: {
                style: `--color: ${color};`,
            }
        }, props.value.start, props.value.end);
        props.onChange(newValue);
    }

    function handleOnGradientChange(gradient?: string){
        const removedValue = removeFormat(
            props.value, "vbuchara-portfolio/text-color", props.value.start, props.value.end
        );
        props.onChange(removedValue);

        if(!gradient) return; 

        const newValue = applyFormat<TextColorAttributes>(props.value, {
            type: "vbuchara-portfolio/text-color",
            attributes: {
                style: `--background-image: ${gradient};`,
            }
        }, props.value.start, props.value.end);
        props.onChange(newValue);
    }

    return (
    <>
        <Fill
            name={"RichText.ToolbarControls"}
        >
            <ToolbarButton
                icon={() => <Color stroke="currentColor" width="24" height="24" color="inherit"/>}
                title="Text Color"
                onClick={() => setShowPopover(true)}
                isActive={props.isActive}
            />
        </Fill>
        {!showPopover ? "" : (
        <Popover
            anchor={props.contentRef.current}
            onClose={() => setShowPopover(false)}
            variant="toolbar"
        >
            <EditorColorGradientPicker
                colorValue={colorSelected}
                gradientValue={gradientSelected}
                onColorChange={handleOnColorChange}
                onGradientChange={handleOnGradientChange}
            />
        </Popover>
        )}
    </>
    );
}