import { 
    InspectorControls 
} from "@wordpress/block-editor";
import { 
    PanelBody, 
    PanelRow
} from "@wordpress/components";

import { EditorSortableMenuController } from "@components/editor-sortable-menu-controller";

import type { HeaderEditComponentProps } from "../edit";

export type HeaderInspectorControlsProps = Pick<
    HeaderEditComponentProps,
    "attributes" | "setAttributes" | "clientId"
>;

export function HeaderInspectorControls({
    attributes,
    setAttributes,
    clientId
}: HeaderInspectorControlsProps){
    return (
    <InspectorControls
        group="settings"
    >
        <PanelBody
            title="Menu Items Configuration"
            initialOpen={false}
        >
            <PanelRow>
                <EditorSortableMenuController
                    attributes={attributes}
                    setAttributes={setAttributes}
                    clientId={clientId}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}