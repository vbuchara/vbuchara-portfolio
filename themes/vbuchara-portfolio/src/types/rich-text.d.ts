declare module "@wordpress/rich-text" {
    import { RefObject } from "react";
    import {
        RichTextValue, 
    } from "@wordpress/rich-text/build-types/index";
    import * as RichTextTypes from "@wordpress/rich-text/src/types";

    export interface RichTextEditComponentProps<
        T extends Record<string, any> = Record<string, any>
    > {
        isActive: boolean,
        onChange: (value: RichTextValue) => void,
        onFocus: () => void,
        value: RichTextValue,
        contentRef: RefObject<HTMLElement>,
        activeAttributes: T
    }

    export interface RichTextFormat<
        T extends Record<string, any> = Record<string, any>
    > extends RichTextTypes.RichTextFormat {
        attributes: T
    }

    export interface WPFormat {
        name: string;
        tagName: string;
        interactive: boolean;
        className?: string | null;
        title: string;
        edit: (props: RichTextEditComponentProps) => React.ReactNode;
        attributes?: Record<string, string>
    }

    export * from "@wordpress/rich-text/build-types/index";

    export function toggleFormat<T extends Record<string, any> = Record<string, any>>(
        value: RichTextValue, 
        format: RichTextFormat<T>
    ): RichTextValue;
    export function applyFormat<T extends Record<string, any> = Record<string, any>>(
        value: RichTextValue, 
        format: RichTextFormat<T>, 
        startIndex?: number | undefined, 
        endIndex?: number | undefined
    ): RichTextValue;

    export function registerFormatType(name: string, settings: WPFormat): WPFormat | undefined
}