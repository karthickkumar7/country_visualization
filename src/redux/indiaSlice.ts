import { india } from '@/data/india';
import { India, IndiaSliceInitialState, StateSortFields } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IndiaSliceInitialState = {
    india: india,
    selectedStates: null,
};

const indiaSlice = createSlice({
    name: 'india',

    initialState,

    reducers: {
        addToSelectedStates: (state, { payload }: { payload: India }) => {
            if (state.selectedStates) {
                const stateAlreadyExists = state.selectedStates.find(
                    (c) => c.name === payload.name
                );

                if (!stateAlreadyExists) {
                    state.selectedStates.push(payload);
                } else {
                    state.selectedStates = state.selectedStates.filter(
                        (c) => c.name !== payload.name
                    );

                    if (state.selectedStates && !state.selectedStates.length)
                        state.selectedStates = null;
                }
            } else {
                state.selectedStates = [payload];
            }
        },

        removeFromSelectedState: (state, { payload }: { payload: string }) => {
            if (state.selectedStates) {
                state.selectedStates = state.selectedStates.filter(
                    (c) => c.name !== payload
                );
            }

            if (state.selectedStates && !state.selectedStates.length) {
                state.selectedStates = null;
            }
        },

        removeAllFromSelectedState: (state) => {
            state.selectedStates = null;
        },

        StateSortBy: (state, { payload }: { payload: StateSortFields }) => {
            if (payload !== 'name')
                state.india = state.india.sort(
                    (x, y) => y[payload] - x[payload]
                );
        },
    },
});

export const {
    addToSelectedStates,
    removeAllFromSelectedState,
    removeFromSelectedState,
    StateSortBy,
} = indiaSlice.actions;

export default indiaSlice.reducer;
