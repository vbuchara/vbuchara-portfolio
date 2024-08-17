import { 
    BlockControls, 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    PanelBody,
    PanelRow,
    ToolbarGroup 
} from "@wordpress/components";

import { EditorUnderlineSettings, UnderlineStyles } from "@components/editor-underline-settings";

import { ArchiveHeaderEditComponentProps } from "../edit";

export type ArchiveHeaderControlsProps = Pick<
    ArchiveHeaderEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface ArchiveHeaderInspectorControlsProps extends ArchiveHeaderControlsProps {};

export function ArchiveHeaderInspectorControls({
    attributes,
    setAttributes,
}: ArchiveHeaderInspectorControlsProps){
    return (
    <InspectorControls>
        <PanelBody
            title="Configuration"
            initialOpen={true}
        >
            <PanelRow>
                Configuration here
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}

export interface ArchiveHeaderBlockControlsProps extends ArchiveHeaderControlsProps {};

export function ArchiveHeaderBlockControls({
    attributes,
    setAttributes
}: ArchiveHeaderBlockControlsProps){
    function handleSetUnderline(newUnderline: Partial<UnderlineStyles>){
        setAttributes({
            styles: {
                ...attributes.styles,
                underline: {
                    ...attributes.styles.underline,
                    ...newUnderline
                }
            }
        });
    }

    return (
    <BlockControls>
        <EditorUnderlineSettings
            underline={attributes.styles.underline}
            setUnderline={handleSetUnderline}
            label="Title Underline Color"
        />
    </BlockControls>
    );
}