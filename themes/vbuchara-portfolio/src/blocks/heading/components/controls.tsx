import { useMemo } from "react";
import type { SingleValue } from "react-select";
import { 
    BlockControls, 
    InspectorControls
} from "@wordpress/block-editor";
import { 
    PanelBody,
    PanelRow,
    ToolbarDropdownMenu,
    ToolbarGroup,
    TextControl,
    BaseControl
} from "@wordpress/components";
import { 
    alignCenter,
    alignLeft,
    alignRight,
    headingLevel1,
    headingLevel2,
    headingLevel3,
    headingLevel4,
    headingLevel5
} from "@wordpress/icons";

import { EditorSelect } from "@components/editor-select";

import { WhiteSpaceOption, WhiteSpaceSelectOptions } from "@constants/block-styles";

import type { HeadingEditComponentProps } from "../edit";
import type { HeadingAlignment, HeadingTagName } from "../heading";

export type HeadingControlsProps = Pick<
    HeadingEditComponentProps,
    "attributes" | "setAttributes"
>;

export interface HeadingInspectorControlsProps extends HeadingControlsProps {};

export function HeadingInspectorControls({
    attributes,
    setAttributes,
}: HeadingInspectorControlsProps){
    const whiteSpaceSelected = WhiteSpaceSelectOptions.find((option) => {
        return option.value === attributes.styles.whiteSpace;
    });

    function handleOnChangeWhiteSpace(value: SingleValue<WhiteSpaceOption>){
        setAttributes({
            styles: {
                ...attributes.styles,
                whiteSpace: value?.value || "normal"
            }
        });
    }

    return (
    <InspectorControls
        group="styles"
    >
        <PanelBody
            title="Typography"
            initialOpen={true}
        >
            <PanelRow>
                <TextControl
                    label="Line Height"
                    value={attributes.styles.lineHeight}
                    onChange={(value) => setAttributes({ 
                        styles: {
                            ...attributes.styles,
                            lineHeight: value
                        } 
                    })}
                />
            </PanelRow>
            <PanelRow>
                <BaseControl
                    label="White Space"
                    className="portfolio-heading__editor-control"
                >
                    <EditorSelect
                        type="select"
                        value={whiteSpaceSelected}
                        onChange={handleOnChangeWhiteSpace}
                        options={WhiteSpaceSelectOptions}
                    />
                </BaseControl>
            </PanelRow>
        </PanelBody>
    </InspectorControls>
    );
}

export interface HeadingBlockControlsProps extends HeadingControlsProps {};

const headingIcons = new Map<HeadingTagName, React.JSX.Element>([
    ["h1", headingLevel1],
    ["h2", headingLevel2],
    ["h3", headingLevel3],
    ["h4", headingLevel4],
    ["h5", headingLevel5]
]);

const textAlignmentIcons = new Map<HeadingAlignment, React.JSX.Element>([
    ["left", alignLeft],
    ["center", alignCenter],
    ["right", alignRight]
]);

export function HeadingBlockControls({
    attributes,
    setAttributes
}: HeadingBlockControlsProps){
    const headingIcon = useMemo(() => {
        return headingIcons.get(attributes.tagName) || headingLevel1;
    }, [attributes.tagName]);
    const textAlignmentIcon = useMemo(() => {
        return textAlignmentIcons.get(attributes.textAlignment) || alignLeft;
    }, [attributes.textAlignment]);

    return (
    <BlockControls>
        <ToolbarGroup>
            <ToolbarDropdownMenu
                label="Heading Size"
                icon={headingIcon}
                controls={[
                    {
                        title: "Heading 1",
                        icon: headingIcons.get("h1"),
                        onClick: () => setAttributes({ tagName: "h1" }),
                        isActive: attributes.tagName === "h1"
                    },
                    {
                        title: "Heading 2",
                        icon: headingIcons.get("h2"),
                        onClick: () => setAttributes({ tagName: "h2" }),
                        isActive: attributes.tagName === "h2"
                    },
                    {
                        title: "Heading 3",
                        icon: headingIcons.get("h3"),
                        onClick: () => setAttributes({ tagName: "h3" }),
                        isActive: attributes.tagName === "h3"
                    },
                    {
                        title: "Heading 4",
                        icon: headingIcons.get("h4"),
                        onClick: () => setAttributes({ tagName: "h4" }),
                        isActive: attributes.tagName === "h4"
                    },
                    {
                        title: "Heading 5",
                        icon: headingIcons.get("h5"),
                        onClick: () => setAttributes({ tagName: "h5" }),
                        isActive: attributes.tagName === "h5"
                    }
                ]}
            />
            <ToolbarDropdownMenu
                label="Heading Text Alignment"
                icon={textAlignmentIcon}
                controls={[
                    {
                        title: "Align Left",
                        icon: textAlignmentIcons.get("left"),
                        onClick: () => setAttributes({ textAlignment: "left" }),
                        isActive: attributes.textAlignment === "left"
                    },
                    {
                        title: "Align Center",
                        icon: textAlignmentIcons.get("center"),
                        onClick: () => setAttributes({ textAlignment: "center" }),
                        isActive: attributes.textAlignment === "center"
                    },
                    {
                        title: "Align Right",
                        icon: textAlignmentIcons.get("right"),
                        onClick: () => setAttributes({ textAlignment: "right" }),
                        isActive: attributes.textAlignment === "right"
                    },
                ]}
            />
        </ToolbarGroup>
    </BlockControls>
    );
}