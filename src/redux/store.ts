import { configureStore } from "@reduxjs/toolkit";
import tabs from '@/redux/slices/tabsSlice';


const store = configureStore({
    reducer: {
        tabs,
    },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;