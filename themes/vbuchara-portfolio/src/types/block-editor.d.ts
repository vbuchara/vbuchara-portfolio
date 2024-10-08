
declare module "@wordpress/block-editor"{
    import {
        ReduxStoreConfig,
        DataRegistry,
        StoreInstance,
    } from "@wordpress/data/build-types/types";
    import { Reserved } from "@wordpress/block-editor/components/use-block-props";
    import * as BlockEditorTypes from "@wordpress/block-editor/index";
    import {
        ColorPalette,
        PanelBody
    } from "@wordpress/components/build-types/index";
    import { Merge } from "type-fest";

    // LINK CONTROL

    /** Default properties associated with a link control value. */
    export type WPLinkControlDefaultValue = {
        url: string;
        title?: string | undefined;
        opensInNewTab?: boolean | undefined;
        type?: string | undefined;
    }

    /** Custom settings values associated with a link. */
    export type WPLinkControlSettingsValue = {
        [setting: string]: any;
    }

    /** Custom settings values associated with a link. */
    export type WPLinkControlSetting = {
        id: string;
        title: string;
    }

    export type WPLinkControlSuggestion = {
        id: number;
        type: string;
        title: string;
        url: string;
    };

    /** 
     * Properties associated with a link control value, composed as a union of the default properties and 
     * any custom settings values.
     */
    export type WPLinkControlValue = WPLinkControlDefaultValue & WPLinkControlSettingsValue;

    export type WPLinkControlOnChangeProp = (value: WPLinkControlValue) => void;

    export type WPLinkControlProps = {
        settings?: (WPLinkControlSetting[]) | undefined;
        forceIsEditingLink?: boolean | undefined;
        value?: WPLinkControlValue | undefined;
        onChange?: WPLinkControlOnChangeProp | undefined;
        noDirectEntry?: boolean | undefined;
        showSuggestions?: boolean | undefined;
        showInitialSuggestions?: boolean | undefined;
        withCreateSuggestion?: boolean | undefined;
        suggestionsQuery?: Record<string, any> | undefined;
        noURLSuggestion?: boolean | undefined;
        hasTextControl?: boolean | undefined;
        createSuggestionButtonText?: string | React.FunctionComponent | undefined;
        renderControlBottom?: React.FunctionComponent;
        createSuggestion?: (input: string) => (WPLinkControlSuggestion | Promise<WPLinkControlSuggestion>)
    }

    export const __experimentalLinkControl: {
        (props: WPLinkControlProps): JSX.Element;
        ViewerFill: unknown;
    };

    // MEDIA UPLOAD
    export namespace MediaUpload {
        export type MediaSelected = {
            id: number;
            title: string;
            filename: string;
            url: string;
            link: string;
            alt: string;
            author: string;
            description: string;
            caption: string;
            name: string;
            status: string;
            uploadedTo: number;
            date: Date;
            modified: Date;
            menuOrder: number;
            mime: string;
            type: string;
            subtype: string;
            icon: string;
            dateFormatted: string;
            editLink: string;
            meta: boolean;
            authorName: string;
            authorLink: string;
            uploadedToTitle: string;
            uploadedToLink: string;
            filesizeInBytes: number;
            filesizeHumanReadable: string;
            context: string;
            originalImageURL: string;
            originalImageName: string;
            height: number;
            width: number;
            orientation: string;
            sizes: MediaSizes;
            acf_errors: boolean;
        };
        
        export type MediaSizes = {
            thumbnail: MediaSizeInfo;
            medium: MediaSizeInfo;
            large: MediaSizeInfo;
            full: MediaSizeInfo;
        };
        
        export type MediaSizeInfo = {
            url: string;
            height: number;
            width: number;
            orientation: string;
        }

        export interface Props<T extends boolean> extends BlockEditorTypes.MediaUpload.Props<T> {}
    }

    export function MediaUpload<T extends boolean = false>(props: MediaUpload.Props<T>): JSX.Element;

    // COLOR GRADIENT
    
    export namespace PanelColorSettings {
        export type ColorSetting =
            & Partial<React.ComponentProps<typeof ColorPalette>>
            & Pick<React.ComponentProps<typeof ColorPalette>, "onChange" | "value">
            & { 
                label: string,
                __experimentalIsRenderedInSidebar?: boolean
            }
        ;

        export interface Props extends Omit<React.ComponentProps<typeof PanelBody>, "children"> {
            colorSettings: ColorSetting[];
            disableCustomColors?: boolean | undefined;
            __experimentalIsRenderedInSidebar?: boolean;
        }
    }

    type __PartialColorPaletteProps = Partial<React.ComponentProps<typeof ColorPalette>>;
    
    export namespace PanelColorGradientSettings {
        export type ColorSetting = Omit<__PartialColorPaletteProps, "onChange" | "value"> 
            & { 
                colorValue?: __PartialColorPaletteProps["value"]  
                gradientValue?: __PartialColorPaletteProps["value"],
                onColorChange?: __PartialColorPaletteProps["onChange"],
                onGradientChange?: __PartialColorPaletteProps["onChange"],
                label?: string,
                disableCustomColors?: boolean,
	            disableCustomGradients?: boolean,
            };

        export interface Props extends Omit<PanelColorSettings.Props, "colorSettings"> {
            settings: ColorSetting[];
            disableCustomColors?: boolean;
	        disableCustomGradients?: boolean;
            __experimentalIsRenderedInSidebar?: boolean;
        }
    }

    // SETTINGS

    export interface EditorGradient {
        name: string;
        slug: string;
        gradient: string;
    }

    export interface EditorSettings extends BlockEditorTypes.EditorSettings{
        gradients: EditorGradient[],
    }

    // STORE

    export type FixedBlockEditorStoreSelectors = AppendStateToSelectors<{
        getSettings(): EditorSettings
    }>;

    export type BlockEditorStoreSelectors = AppendStateToSelectors<typeof import("@wordpress/block-editor/store/selectors")>;

    export type BlockEditorStoreActions = typeof import("@wordpress/block-editor/store/actions");

    export interface BlockEditorStoreConfig extends ReduxStoreConfig<any, BlockEditorStoreActions, BlockEditorStoreSelectors>{
        reducer: any;
        dispatch: BlockEditorStoreActions;
        selectors: Merge<BlockEditorStoreSelectors, FixedBlockEditorStoreSelectors>;
        controls: any;
    }

    export interface BlockEditorStoreDescriptor {
        name: "core/block-editor";
        instantiate: ( registry: DataRegistry ) => StoreInstance<BlockEditorStoreConfig>;
    }

    type AppendStateToSelectors<
        T extends Record<PropertyKey, (...args: any) => any>
    > = {
        [K in keyof T]: T[K] extends (...args: infer Args) => infer Return
            ? (state: any, ...args: Args) => Return
            : T[K];
    }

    // USE BLOCK PROPS
    export interface Merged {
        className: string;
        style: Record<string, string | number>;
        ref: React.RefCallback<unknown>;
    }
    
    export interface UseBlockProps {
        <Props extends Record<string, unknown>>(
            props?:
                & Props
                & {
                    [K in keyof Props]: K extends keyof Reserved ? never : Props[K];
                }
                & { ref?: React.Ref<unknown> },
        ): Omit<Props, "ref"> & Merged & Reserved & Record<string, unknown>;
    
        save: (props?: Record<string, unknown>) => Record<string, unknown>;
    }

    // EXPORTS

    export * from "@wordpress/block-editor/index";
    export const useBlockProps: UseBlockProps;
    export const store: BlockEditorStoreDescriptor;

    export const PanelColorSettings: React.ComponentType<PanelColorSettings.Props>;
    export const __experimentalPanelColorGradientSettings: React.ComponentType<PanelColorGradientSettings.Props>;
}
