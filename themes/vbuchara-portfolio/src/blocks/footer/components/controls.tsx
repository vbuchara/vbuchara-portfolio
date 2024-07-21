import { 
    InspectorControls 
} from "@wordpress/block-editor";
import { 
    PanelBody, 
    PanelRow,
    TextControl
} from "@wordpress/components";

import { EditorSortableMenuController } from "@components/editor-sortable-menu-controller";

import type { FooterEditComponentProps } from "../edit";
import type { FooterSocialLinks } from "../footer";

export type FooterInspectorControlsProps = Pick<
    FooterEditComponentProps,
    "attributes" | "setAttributes" | "clientId"
>;

export function FooterInspectorControls({
    attributes,
    setAttributes,
    clientId
}: FooterInspectorControlsProps){
    const {
        socialLinks
    } = attributes;

    function onSocialLinkChanged(
        value: string, 
        socialLink: keyof FooterSocialLinks
    ){
        setAttributes({
            socialLinks: {
                ...socialLinks,
                [socialLink]: value
            }
        });
    }

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
        <PanelBody
            title="Social Links"
        >
            <PanelRow>
                <TextControl
                    label="Linkedin Link"
                    value={socialLinks.linkedin}
                    onChange={(value) => onSocialLinkChanged(value, "linkedin")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="Github Link"
                    value={socialLinks.github}
                    onChange={(value) => onSocialLinkChanged(value, "github")}
                />
            </PanelRow>
            <PanelRow>
                <TextControl
                    label="GMail Email"
                    value={socialLinks.gmail}
                    onChange={(value) => onSocialLinkChanged(value, "gmail")}
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}