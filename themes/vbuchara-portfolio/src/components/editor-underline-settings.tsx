import { useRef, useState } from "react";
import { 
    Popover,
    ToolbarButton, 
    ToolbarGroup 
} from "@wordpress/components";
import { formatUnderline } from "@wordpress/icons";

import { EditorColorGradientPicker } from "./editor-color-gradient-picker";

export interface UnderlineStyles {
    underlineColor?: string | null;
    underlineGradient?: string | null;
}

export interface EditorUnderlineSettingsProps {
    underline: UnderlineStyles;
    setUnderline: (underline: Partial<UnderlineStyles>) => void;
    label?: string;
}

export function EditorUnderlineSettings(props: EditorUnderlineSettingsProps){
    const {
        underline,
        setUnderline,
        label
    } = props;

    const underlineButtonRef = useRef<HTMLElement>(null);

    const [showUnderlinePopover, setShowUnderlinePopover] = useState(false);

    function handleOnChangeUnderlineColor(value?: string){
        setUnderline({
            underlineColor: value,
            underlineGradient: null
        });
    }

    function handleOnChangeUnderlineGradient(value?: string){
        setUnderline({
            underlineColor: null,
            underlineGradient: value
        });
    }

    return (
    <>
        <ToolbarGroup>
            <ToolbarButton
                label={label}
                icon={formatUnderline}
                ref={underlineButtonRef}
                isActive={Boolean(underline.underlineColor || underline.underlineGradient)}
                onClick={() => setShowUnderlinePopover(true)}
            />
        </ToolbarGroup>
        {!showUnderlinePopover ? "" : (
        <Popover
            anchor={underlineButtonRef.current}
            variant="toolbar"
            onClose={() => setShowUnderlinePopover(false)}
        >
            <EditorColorGradientPicker
                colorValue={underline.underlineColor || undefined}
                gradientValue={underline.underlineGradient || undefined}
                onColorChange={handleOnChangeUnderlineColor}
                onGradientChange={handleOnChangeUnderlineGradient}
            />
        </Popover>
        )}
    </>
    );
}
