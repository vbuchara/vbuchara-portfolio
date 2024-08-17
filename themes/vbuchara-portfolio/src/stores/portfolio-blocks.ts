import { createReduxStore, dispatch, register, select } from "@wordpress/data";
import type { ValueOf } from "type-fest";

export type ClientId = string;

export interface BlockInfoJSON {
    clientId: ClientId;
    registeredIds: string[];
    pageTemplateId: string;
}

export interface BlockInfo extends Omit<BlockInfoJSON, "registeredIds"> {
    registeredIds: Set<string>;
}

const defaultState = {
    registeredBlocks: [] as [ClientId, BlockInfoJSON][]
};

export type PortfolioBlocksStoreState = typeof defaultState;

const actions = {
    registerBlock: (block: BlockInfo) => {
        return {
            type: "REGISTER_BLOCK",
            block: block
        } as const;
    },
    removeRegisteredBlockById: (clientId: ClientId) => {
        return {
            type: "REMOVE_REGISTERED_BLOCK_BY_ID",
            clientId: clientId
        } as const;
    },
    clearRegisteredBlocks: () => {
        return {
            type: "CLEAR_REGISTERED_BLOCKS"
        } as const;
    },
} as const;

export type PortfolioBlocksStoreActions = typeof actions;

export type PortfolioBlocksStoreAction = ReturnType<ValueOf<PortfolioBlocksStoreActions>>;

const selectors = {
    getRegisteredBlock: (state: PortfolioBlocksStoreState, clientId: ClientId) => {
        const registeredBlocksMap = new Map(state.registeredBlocks);
        const registeredBlock = registeredBlocksMap.get(clientId);

        if(!registeredBlock) return undefined;

        return {
            ...registeredBlock,
            registeredIds: new Set(registeredBlock.registeredIds),
        } as BlockInfo;
    },
    getRegisteredBlocks: (state: PortfolioBlocksStoreState) => {
        const formattedRegisteredBlocks = state.registeredBlocks.map<
            [ClientId, BlockInfo]
        >(([clientId, block]) => {
            return [clientId, {
                ...block,
                registeredIds: new Set(block.registeredIds)
            }];
        });
        return new Map(formattedRegisteredBlocks);
    },
    isRegisteredId: (state: PortfolioBlocksStoreState, id: string, pageTemplateId?: string) => {
        const filteredRegisteredBlocks = !pageTemplateId 
            ? state.registeredBlocks 
            : state.registeredBlocks.filter(([, block]) => pageTemplateId === block.pageTemplateId);
        const registeredBlocksMap = new Map(filteredRegisteredBlocks);
 
        const allRegisteredIds = new Set(
            Array.from(registeredBlocksMap).reduce(
                (result, [, { registeredIds }]) => [...result, ...registeredIds], [] as string[]
            )
        );

        return allRegisteredIds.has(id);
    }
 }

export type PortfolioBlocksStoreSelectors = typeof selectors;

const portfolioBlocksStore = createReduxStore<
    PortfolioBlocksStoreState, PortfolioBlocksStoreActions, PortfolioBlocksStoreSelectors
>("vbuchara-portfolio/blocks-store", {
    reducer: (
        state: PortfolioBlocksStoreState = defaultState, 
        action: PortfolioBlocksStoreAction
    ): PortfolioBlocksStoreState => {
        switch(action.type){
            case "REGISTER_BLOCK":{
                const registeredBlocksMap = new Map(state.registeredBlocks);
                registeredBlocksMap.set(action.block.clientId, {
                    ...action.block,
                    registeredIds: Array.from(action.block.registeredIds)
                });

                return {
                    ...state,
                    registeredBlocks: Array.from(registeredBlocksMap.entries())
                }
            };
            case "REMOVE_REGISTERED_BLOCK_BY_ID":{
                const registeredBlocksMap = new Map(state.registeredBlocks);
                registeredBlocksMap.delete(action.clientId);

                return {
                    ...state,
                    registeredBlocks: Array.from(registeredBlocksMap.entries())
                };
            };
            case "CLEAR_REGISTERED_BLOCKS":{
                return {
                    ...state,
                    registeredBlocks: []
                }
            }
            default:{
                return state;
            }
        }
    },
    actions: actions,
    selectors: selectors,
    initialState: defaultState,
});

if(!select(portfolioBlocksStore)){
    register(portfolioBlocksStore);
    
    dispatch(portfolioBlocksStore).clearRegisteredBlocks();
}

export default portfolioBlocksStore;