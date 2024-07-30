import { useCallback, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import {
    __experimentalFetchLinkSuggestions as fetchLinkSuggestions
} from "@wordpress/core-data";
import { BaseControl } from "@wordpress/components";
import pDebounce from "p-debounce";

import { ReactComponent as Globe } from "@assets/svgs/globe.svg";

import { EditorSelect } from "@components/editor-select";

import type { ButtonInspectorControlsProps } from "./controls";
import { LinkSuggestionsOption } from "@src/components/editor-menu-item";
import { SingleValue } from "react-select";

export type SelectLinkControlsProps = Pick<
    ButtonInspectorControlsProps,
    "attributes" | "setAttributes"
>;

export function SelectLinkControl({
    attributes,
    setAttributes
}: SelectLinkControlsProps){

    const urlViewLinkRef = useRef<HTMLAnchorElement>(null);
    const animationCancel = useRef(false);
    const [urlSearch, setUrlSearch] = useState("");

    const [
        _, 
        urlViewLinkAnimationController
    ] = useSpring(() => ({
        scrollX: 0,
        onChange: (result) => {
            if(!urlViewLinkRef.current) return;

            const {
                scrollX
            } = result.value as { scrollX: number };

            urlViewLinkRef.current.scrollTo({
                left: scrollX,
            });
        },
        config: {
            duration: 3000
        }
    }));

    const debouncedGetLinkSuggestionsOptions = useCallback(
        pDebounce(getLinkSuggestionsOptions, 500), 
        []
    );

    async function getLinkSuggestionsOptions(
        inputValue: string
    ){
        if(inputValue.length < 3) return [];

        const linkSuggestions = await fetchLinkSuggestions(inputValue, {});
        const linkSuggestionOptions = linkSuggestions.map((suggestion) => {
            return {
                label: suggestion.title,
                value: suggestion.url,
            };
        });

        return linkSuggestionOptions;
    }

    function handleScrollLeftUrlViewLink(){
        if(!urlViewLinkRef.current) return;
        
        urlViewLinkAnimationController.set({ scrollX: 0 });
        animationCancel.current = false;

        urlViewLinkRef.current.style.setProperty("text-overflow", "unset");

        setTimeout(() => {
            if(!urlViewLinkRef.current || animationCancel.current) return;

            urlViewLinkAnimationController.start({
                scrollX: urlViewLinkRef.current.scrollWidth
            });
        }, 500);
    }

    function handleRevertScrollUrlViewLink(){
        if(!urlViewLinkRef.current) return;

        urlViewLinkAnimationController.stop(true);
        urlViewLinkRef.current.style.removeProperty("text-overflow");
        urlViewLinkRef.current.scrollTo({
            left: 0
        });
        animationCancel.current = true;
    }

    function handleOnChangeUrl(option: SingleValue<LinkSuggestionsOption>){
        if(option === null) return;

        setAttributes({
            linkUrl: option.value
        });
    }

    return (
    <BaseControl
        label="Url"
        className="portfolio-button__editor-control"
    >   
        {!attributes.linkUrl ? "" : (
        <div className={`portfolio-button__editor-control-url-view`}>
            <Globe
                className={`portfolio-button__editor-control-url-view-icon`}
            />
            <animated.a
                ref={urlViewLinkRef}
                className={`portfolio-button__editor-control-url-view-link`}
                href={attributes.linkUrl}
                target="_blank"
                rel="noopener"
                onFocus={handleScrollLeftUrlViewLink}
                onBlur={handleRevertScrollUrlViewLink}
                onMouseOver={handleScrollLeftUrlViewLink}
                onMouseLeave={handleRevertScrollUrlViewLink}
            >
                {attributes.linkUrl}
            </animated.a>
        </div>
        )}
        <EditorSelect
            type="async-creatable"
            placeholder={"Search Url"}
            loadOptions={debouncedGetLinkSuggestionsOptions}
            inputValue={urlSearch}
            onInputChange={setUrlSearch}
            onChange={handleOnChangeUrl}
            menuPortalTarget={document.body}
            filterOption={() => true}
            styles={{
                placeholder: (base) => ({
                    ...base,
                    color: "var(--input-placeholder-color)"
                })
            }}
        />
    </BaseControl>
    );
}