import { ChartTypes, VisualSliceInitialState } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: VisualSliceInitialState = {
    currentChart: 'bar',
    currentField: 'gdp_nominal',
};

const visualSlice = createSlice({
    name: 'visual',

    initialState,

    reducers: {
        setCurrentChartType: (state, { payload }: { payload: ChartTypes }) => {
            if (state.currentChart !== payload) {
                state.currentChart = payload;
            }
        },
    },
});

export const { setCurrentChartType } = visualSlice.actions;

export default visualSlice.reducer;
