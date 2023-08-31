import { FunctionSliceInitialState } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: FunctionSliceInitialState = {
    currentView: 'table',
    isMobileDrawerOpen: false,
};

const functionSlice = createSlice({
    name: 'function',

    initialState,

    reducers: {
        setCurrentView: (state, { payload }: { payload: 'table' | 'grid' }) => {
            if (state.currentView !== payload) {
                state.currentView = payload;
            }
        },
        setMobileDrawer: (state) => {
            state.isMobileDrawerOpen = !state.isMobileDrawerOpen;
        },
    },
});

export const { setCurrentView, setMobileDrawer } = functionSlice.actions;

export default functionSlice.reducer;
