import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



interface ITabsState {
    activeTab: number;
};

const initialState: ITabsState = {
    activeTab: 1,
};


const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        handleActiveTab: (state, action: PayloadAction<number>) => {
            state.activeTab = action.payload
        },
    },
});

export const { handleActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;