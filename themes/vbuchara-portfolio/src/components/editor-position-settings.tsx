import type { SingleValue } from "react-select";
import { 
    BaseControl, 
    PanelBody, 
    PanelRow, 
    TextControl,
    __experimentalNumberControl as NumberControl
} from "@wordpress/components";

import {
    PositionOptions, 
    type PositionValue,
    type PositionOption
} from "@constants/block-styles";

import { EditorSelect } from "./editor-select";

export interface PositionStyles {
    position?: PositionValue,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    zIndex?: number,
}

export interface EditorPositionSettingsProps {
    position: PositionStyles,
    setPosition: (position: Partial<PositionStyles>) => void,
    title?: string,
    initialOpen?: boolean,
}

export function EditorPositionSettings(props: EditorPositionSettingsProps){
    const {
        position,
        setPosition,
        title,
        initialOpen
    } = props;

    const positionOptionSelected = PositionOptions.find(option => {
        return option.value === position.position;
    });

    function handleOnChangePosition(newPosition: SingleValue<PositionOption>){
        setPosition({ position: newPosition?.value })
    }

    return (
    <PanelBody
        title={title}
        initialOpen={initialOpen}
    >
        <PanelRow>
            <BaseControl
                label="Position"
                className="portfolio-editor__control"
            >
                <EditorSelect
                    value={positionOptionSelected}
                    onChange={handleOnChangePosition}
                    options={PositionOptions}
                />
            </BaseControl>
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Top"
                className="portfolio-editor__control"
                value={position.top || ""}
                onChange={(value) => setPosition({ top: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Bottom"
                className="portfolio-editor__control"
                value={position.bottom || ""}
                onChange={(value) => setPosition({ bottom: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Left"
                className="portfolio-editor__control"
                value={position.left || ""}
                onChange={(value) => setPosition({ left: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Right"
                className="portfolio-editor__control"
                value={position.right || ""}
                onChange={(value) => setPosition({ right: value })}
            />
        </PanelRow>
        <PanelRow>
            <NumberControl
                label="Z Index"
                className="portfolio-editor__control"
                value={position.zIndex || ""}
                onChange={(value) => setPosition({ zIndex: Number(value) })}
                step={1}
            />
        </PanelRow>
    </PanelBody>
    );
}

export function getPositionSettingsVariables(position: PositionStyles){
    return {
        "--position": position.position,
        "--top": position.top,
        "--left": position.left,
        "--right": position.right,
        "--bottom": position.bottom,
        "--z-index": position.zIndex,
    } satisfies React.CSSProperties;
}