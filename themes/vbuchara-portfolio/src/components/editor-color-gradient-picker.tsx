import { useState } from "react";
import { 
    ColorPalette,
    type EditorColor,
    type EditorGradient,
    store as blockEditorStore
} from "@wordpress/block-editor";
import { 
    GradientPicker, 
    TabPanel 
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";

export interface EditorColorGradientPickerProps {
    colorValue: string | undefined;
    gradientValue: string | undefined;
    onColorChange: (newColor?: string, index?: number) => void;
    onGradientChange: (currentGradient: string | undefined) => void;
    colors?: EditorColor[]
    gradients?: EditorGradient[],
    extraColors?: EditorColor[],
    extraGradients?: EditorGradient[]
}

export function EditorColorGradientPicker(
    props: EditorColorGradientPickerProps
){
    const {
        colors: themeColors,
        gradients: themeGradients,
    } = useSelect((select) => {
        return select(blockEditorStore).getSettings();
    }, []);

    const colors = props.colors 
        ? [...props.colors, ...(props.extraColors || [])]
        : [...themeColors, ...(props.extraColors || [])];
    const gradients = props.gradients
        ? [...props.gradients, ...(props.extraGradients || [])]
        : [...themeGradients, ...(props.extraGradients || [])];
    
    const TabPanels = {
        Color: () => (
        <ColorPalette
            colors={colors}
            value={props.colorValue}
            onChange={props.onColorChange}
        />
        ),
        Gradient: () => (
        <GradientPicker
            gradients={gradients}
            value={props.gradientValue}
            onChange={props.onGradientChange}
        />
        )
    } as const;

    const [currentTabSelected, setCurrentTabSelected] = useState<keyof typeof TabPanels>("Color");
    const CurrentTab = TabPanels[currentTabSelected];

    return (
    <TabPanel
        tabs={[
            {
                name: "Color",
                title: "Color",
            },
            {
                name: "Gradient",
                title: "Gradient",
            }
        ]}
        onSelect={(tabName: keyof typeof TabPanels) => {
            if(tabName in TabPanels){
                setCurrentTabSelected(tabName);
            }
        }}  
    >
        {() => (
        <div className="portfolio-editor-formats__text-color">
            <CurrentTab />
        </div>
        )}
    </TabPanel>
    );
}