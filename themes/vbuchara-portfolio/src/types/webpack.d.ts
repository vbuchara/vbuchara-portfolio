import { Compiler, Configuration } from "webpack";
import BrowserSync from "browser-sync";

export type WordpressWebpackDefaultConfig = (readonly [Configuration, Configuration]) | Configuration;

export interface BrowserSyncPlugin {
    new(browserSyncOptions: BrowserSync.Options, pluginOptions?: BrowserSyncPlugin.Options): BrowserSyncPlugin;
    apply(compiler: Compiler): void;
}

export namespace BrowserSyncPlugin {
    interface Options {
        /**
         * BrowserSync instance init callback.
         * @defaultValue undefined
         */
        callback?(error: Error, bs: BrowserSync.BrowserSyncInstance): void;
        /**
         * allows BrowserSync to inject changes inplace instead of reloading the page when changed
         * chunks are all CSS files.
         * @defaultValue false
         */
        injectCss?: boolean | undefined;
        /**
         * BrowserSync instance name.
         * @defaultValue 'bs-webpack-plugin'
         */
        name?: string | undefined;
        /**
         * Should BrowserSync handle reloads?
         * @defaultValue true
         */
        reload?: boolean | undefined;
    }
}