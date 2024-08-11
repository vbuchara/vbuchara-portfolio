import type { SingleValue } from "react-select";
import { 
    BaseControl, 
    PanelBody, 
    PanelRow, 
    TextControl, 
    type SelectControlOptions 
} from "@wordpress/components";

import { 
    EditorMediaPicker, 
    EditorMediaPickerProps, 
    type EditorMediaPickerAttributes 
} from "./editor-media-picker";

import { 
    BackgroundAttachmentOptions,
    BackgroundClipOptions,
    BackgroundOriginOptions,
    type BackgroundAttachmentOption,
    type BackgroundClipOption,
    type BackgroundOriginOption,
    type BackgroundAttachmentValue, 
    type BackgroundClipValue,
    type BackgroundOriginValue
} from "@constants/block-styles";

import { EditorSelect } from "./editor-select";

export interface BackgroundImageStyles {
    backgroundImageId?: number;
    backgroundImage?: string;
    backgroundAttachment?: BackgroundAttachmentValue;
    backgroundClip?: BackgroundClipValue;
    backgroundOrigin?: BackgroundOriginValue;
    backgroundPosition?: string;
    backgroundPositionX?: string;
    backgroundPositionY?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
}

export interface EditorBackgroundImageSettingsProps {
    backgroundImageStyles: BackgroundImageStyles,
    setBackgroundImageStyles: (backgroundImageStyles: Partial<BackgroundImageStyles>) => void,
    title?: string,
    initialOpen?: boolean,
    mediaPickerProps?: Omit<EditorMediaPickerProps, "attributes" | "setAttributes">
}

export function EditorBackgroundImageSettings(props: EditorBackgroundImageSettingsProps){
    const { 
        backgroundImageStyles,
        setBackgroundImageStyles,
        title,
        initialOpen,
        mediaPickerProps
    } = props;

    function getBackgroundImageStylePropertySelected<T extends SelectControlOptions>(
        options: T[],
        property: keyof BackgroundImageStyles
    ){
        return options.find((option) => {
            return option.value === backgroundImageStyles[property]
        });
    }

    function handleOnChangeBackgroundImage(newImage: Partial<EditorMediaPickerAttributes>){
        if(!newImage.imageId || !newImage.imageUrl){
            setBackgroundImageStyles({
                backgroundImageId: 0,
                backgroundImage: ""
            });
            return;
        }

        setBackgroundImageStyles({
            backgroundImageId: newImage.imageId,
            backgroundImage: newImage.imageUrl
        });
    }

    function getHandleOnChangeSelectBackgroundImageStyle<T extends SelectControlOptions>(
        property: keyof BackgroundImageStyles
    ){
        return (option: SingleValue<T>) => {
            if(!option) return;
 
            setBackgroundImageStyles({ [property]: option.value });
        };
    }

    return (
    <PanelBody
        title={title}
        initialOpen={initialOpen}
    >
        <PanelRow>
            <BaseControl
                label="Image Source"
                className="portfolio-editor__control"
            >
                <EditorMediaPicker
                    attributes={{
                        imageId: backgroundImageStyles.backgroundImageId,
                        imageUrl: backgroundImageStyles.backgroundImage
                    }}
                    setAttributes={handleOnChangeBackgroundImage}
                    {...mediaPickerProps}
                />
            </BaseControl>
        </PanelRow>
        <PanelRow>
            <BaseControl
                label="Background Attachment"
                className="portfolio-editor__control"
            >
                <EditorSelect
                    value={getBackgroundImageStylePropertySelected(BackgroundAttachmentOptions, "backgroundAttachment")}
                    options={BackgroundAttachmentOptions}
                    onChange={getHandleOnChangeSelectBackgroundImageStyle<BackgroundAttachmentOption>("backgroundAttachment")}
                />
            </BaseControl>
        </PanelRow>
        <PanelRow>
            <BaseControl
                label="Background Clip"
                className="portfolio-editor__control"
            >
                <EditorSelect
                    value={getBackgroundImageStylePropertySelected(BackgroundClipOptions, "backgroundClip")}
                    options={BackgroundClipOptions}
                    onChange={getHandleOnChangeSelectBackgroundImageStyle<BackgroundClipOption>("backgroundClip")}
                />
            </BaseControl>
        </PanelRow>
        <PanelRow>
            <BaseControl
                label="Background Origin"
                className="portfolio-editor__control"
            >
                <EditorSelect
                    value={getBackgroundImageStylePropertySelected(BackgroundOriginOptions, "backgroundOrigin")}
                    options={BackgroundOriginOptions}
                    onChange={getHandleOnChangeSelectBackgroundImageStyle<BackgroundOriginOption>("backgroundOrigin")}
                />
            </BaseControl>
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Background Position"
                value={backgroundImageStyles.backgroundPosition || ""}
                onChange={(value) => setBackgroundImageStyles({ backgroundPosition: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Background Position X"
                value={backgroundImageStyles.backgroundPositionX || ""}
                onChange={(value) => setBackgroundImageStyles({ backgroundPositionX: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Background Position Y"
                value={backgroundImageStyles.backgroundPositionY || ""}
                onChange={(value) => setBackgroundImageStyles({ backgroundPositionY: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Background Repeat"
                value={backgroundImageStyles.backgroundRepeat || ""}
                onChange={(value) => setBackgroundImageStyles({ backgroundRepeat: value })}
            />
        </PanelRow>
        <PanelRow>
            <TextControl
                label="Background Size"
                value={backgroundImageStyles.backgroundSize || ""}
                onChange={(value) => setBackgroundImageStyles({ backgroundSize: value })}
            />
        </PanelRow>
    </PanelBody>
    );
}

export function getBackgroundImageSettingVariables(backgroundImage: BackgroundImageStyles){
    return {
        "--background-image": backgroundImage.backgroundImage,
        "--background-attachment": backgroundImage.backgroundAttachment,
        "--background-clip": backgroundImage.backgroundClip,
        "--background-origin": backgroundImage.backgroundOrigin,
        "--background-position": backgroundImage.backgroundPosition,
        "--background-position-x": backgroundImage.backgroundPositionX,
        "--background-position-y": backgroundImage.backgroundPositionY,
        "--background-repeat": backgroundImage.backgroundRepeat,
        "--background-size": backgroundImage.backgroundSize,
    } satisfies React.CSSProperties;
}