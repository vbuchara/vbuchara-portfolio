import { store, getContext } from "@wordpress/interactivity";

export interface HeaderContext {
    isMenuOpen: boolean;
}

store("vbuchara-portfolio/header", {
    actions: {
        toggleMenuOpen: () => {
            const headerContext = getContext<HeaderContext>();

            headerContext.isMenuOpen = !headerContext.isMenuOpen;
        }
    }
});
