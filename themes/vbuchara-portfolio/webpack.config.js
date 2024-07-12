// @ts-check
/** @type {import("./src/types/webpack").WordpressWebpackDefaultConfig} */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const path = require("path");

/** @type {import("webpack").Configuration} */
const scriptConfig = Array.isArray(defaultConfig) ? defaultConfig[0] : defaultConfig;
/** @type {import("webpack").Configuration|undefined} */
const moduleConfig = Array.isArray(defaultConfig) ? defaultConfig[1] : undefined;

const possiblePromiseScriptConfigEntries = typeof scriptConfig.entry === "function" 
    ? scriptConfig.entry() 
    : scriptConfig.entry;
const scriptConfigEntries = !(possiblePromiseScriptConfigEntries instanceof Promise)
    ? possiblePromiseScriptConfigEntries
    : {};

/** 
 * @param {Function|unknown} plugin 
 */
const filterDependencyExtractionPlugin = (plugin) => {
    return plugin?.constructor.name !== "DependencyExtractionWebpackPlugin";
};

/** 
 * @param {Function|unknown} plugin 
 */
const findDependencyExtractionPlugin = (plugin) => {
    return plugin?.constructor.name === "DependencyExtractionWebpackPlugin";
};

/**
 * 
 * @param {import("webpack").Configuration} config 
 * @returns {Record<string, any>}
 */
const getOptionsFromPlugin = (config) => {
    const plugin = (scriptConfig.plugins || []).find(findDependencyExtractionPlugin);
    return plugin && "options" in plugin ? plugin.options : {};
};

/**
 * 
 * @param {import("webpack").Configuration} config 
 */
const getNewPlugins = (config) => [
    new Dotenv(),
    new DependencyExtractionWebpackPlugin({
        ...getOptionsFromPlugin(config),
        requestToExternal(request) {
            if(request === "@wordpress/react-i18n") return undefined;
        }
    }),
].filter(Boolean);

console.log(process.execArgv);
// Scripts Config

const newScriptPlugins = [
    ...(scriptConfig.plugins || []).filter(filterDependencyExtractionPlugin),
    ...getNewPlugins(scriptConfig)
];

/** @type {import("webpack").Configuration} */
const newScriptConfig = {
    ...scriptConfig,
    entry: {
        ...(typeof scriptConfigEntries === "object" ? scriptConfigEntries : {}),
        index: "./src/index.ts"
    },
    output: {
        ...scriptConfig.output,
        filename: "[name].js",
    },
    resolve: {
        ...scriptConfig.resolve,
        alias: {
            ...scriptConfig.resolve?.alias,
            "@assets": path.resolve(__dirname, "assets/"),
            "@src": path.resolve(__dirname, "src/"),
            "@blocks": path.resolve(__dirname, "src/blocks/"),
            "@classes": path.resolve(__dirname, "src/classes/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@functions": path.resolve(__dirname, "src/functions/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@utils": path.resolve(__dirname, "src/utils/"),
        }
    },
    stats: {
        ...(typeof scriptConfig.stats === "object" && scriptConfig.stats),
        loggingDebug: ["sass-loader"]
    },
    plugins: [
        ...newScriptPlugins 
    ],
    optimization: {
        ...scriptConfig.optimization,
        splitChunks: {
            ...scriptConfig.optimization?.splitChunks,
            cacheGroups: {
                ...(scriptConfig.optimization?.splitChunks && scriptConfig.optimization?.splitChunks.cacheGroups),
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
}

// Modules Config

const newModulePlugins = [
    ...(moduleConfig?.plugins || []).filter(filterDependencyExtractionPlugin),
   ...getNewPlugins(moduleConfig || {}),
];

/** @type {import("webpack").Configuration} */
const newModuleConfig = {
    ...moduleConfig,
    resolve: {
        ...moduleConfig?.resolve,
        alias: {
            ...moduleConfig?.resolve?.alias,
            "@assets": path.resolve(__dirname, "assets/"),
            "@src": path.resolve(__dirname, "src/"),
            "@blocks": path.resolve(__dirname, "src/blocks/"),
            "@classes": path.resolve(__dirname, "src/classes/"),
            "@components": path.resolve(__dirname, "src/components/"),
            "@functions": path.resolve(__dirname, "src/functions/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
            "@utils": path.resolve(__dirname, "src/utils/"),
        }
    },
    stats: {
        ...(typeof moduleConfig?.stats === "object" && moduleConfig.stats),
        loggingDebug: ["sass-loader"]
    },
    plugins: newModulePlugins,
};

/** @type {import("webpack").Configuration} */
const reactJSXRuntimePolyfill = {
    mode: process.env.NODE_ENV === 'production' ? "production" : "development",
    entry: {
		'react-jsx-runtime': {
			import: 'react/jsx-runtime',
		},
	},
	output: {
		path: path.resolve(__dirname, 'assets/js'),
		filename: 'react-jsx-runtime.js',
		library: {
			name: 'ReactJSXRuntime',
			type: 'window',
		},
	},
	externals: {
		react: 'React',
	},
};

if(moduleConfig){
    module.exports = [newScriptConfig, newModuleConfig, reactJSXRuntimePolyfill];
} else {
    module.exports = [newScriptConfig, reactJSXRuntimePolyfill];
}