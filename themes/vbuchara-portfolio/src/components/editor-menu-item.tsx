import { 
    type FormEvent, 
    forwardRef, 
    LegacyRef, 
    type HTMLAttributes, 
    useState,
    useCallback,
    useRef,
} from "react";
import type { SingleValue } from "react-select";
import { animated, useSpring } from "@react-spring/web";
import {
    __experimentalFetchLinkSuggestions as fetchLinkSuggestions
} from "@wordpress/core-data" ;
import pDebounce from "p-debounce";

import { ReactComponent as Globe } from "@assets/svgs/globe.svg";
import { ReactComponent as TrashCan } from "@assets/svgs/trash-can.svg";

import { useTextScrollAnimation } from "@hooks/useTextScrollAnimation";

import { EditorSelect } from "./editor-select";

export interface EditorMenuItemType {
    id: string;
    title: string;
    url: string;
}

export interface EditorMenuItemProps extends HTMLAttributes<HTMLDivElement>{
    menuItem: EditorMenuItemType,
    setMenuItem: (item: EditorMenuItemType) => void,
    removeMenuItem: (item: EditorMenuItemType) => void,
    renderDragHandler?: (props: unknown) => React.ReactElement
};

export interface LinkSuggestionsOption {
    label: string;
    value: string;
}

function EditorMenuItemComponent({
    menuItem,
    setMenuItem,
    removeMenuItem,
    renderDragHandler: DragHandler,
    ...props
}: EditorMenuItemProps, ref: LegacyRef<HTMLDivElement>){
    const mainDivClassName = props.className ? props.className : "editor-menu__item";

    const urlViewLinkRef = useRef<HTMLAnchorElement>(null);

    const [urlSearch, setUrlSearch] = useState("");


    const { startScrollLeft, revertScroll } = useTextScrollAnimation(urlViewLinkRef);

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

    function handleOnInputTitle(event: FormEvent<HTMLInputElement>){
        setMenuItem({
            ...menuItem,
            title: event.currentTarget.value
        });
    }

    function handleOnChangeUrl(option: SingleValue<LinkSuggestionsOption>){
        if(option === null) return;

        setMenuItem({...menuItem, url: option.value });
    }

    function handleOnClickDelete(){
        removeMenuItem(menuItem);
    }

    return (
    <div
        className={mainDivClassName}
        id={menuItem.id}
        {...props} 
        ref={ref} 
    >
        {DragHandler ? <DragHandler/> : ""}
        <label 
            className={`${mainDivClassName}-title`}
        >
            Title: 
            <input
                name={`menu-item-title-${menuItem.id}`}
                type="text"
                defaultValue={menuItem.title}
                onInput={handleOnInputTitle}
            />
        </label>
        <label 
            className={`${mainDivClassName}-url`}
        >
            Url: 
            {!menuItem.url ? "" : (
            <div className={`${mainDivClassName}-url-view`}>
                <Globe
                    className={`${mainDivClassName}-url-view-icon`}
                />
                <animated.a
                    ref={urlViewLinkRef}
                    className={`${mainDivClassName}-url-view-link`}
                    href={menuItem.url}
                    target="_blank"
                    rel="noopener"
                    onFocus={startScrollLeft}
                    onBlur={revertScroll}
                    onMouseOver={startScrollLeft}
                    onMouseLeave={revertScroll}
                >
                    {menuItem.url}
                </animated.a>
            </div>
            )}
            <EditorSelect
                type="async-creatable"
                name={`menu-item-url-${menuItem.id}`}
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
        </label>
        <button
            type="button"
            className={`${mainDivClassName}-delete`}
            onClick={handleOnClickDelete}
        >
            Delete Item
            <TrashCan
                className={`${mainDivClassName}-delete-icon`}
            />
        </button>
    </div>
    );
}

export const EditorMenuItem = forwardRef(EditorMenuItemComponent);