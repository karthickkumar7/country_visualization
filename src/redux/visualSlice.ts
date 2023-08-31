import { ChartTypes, FieldTypes, VisualSliceInitialState } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: VisualSliceInitialState = {
    currentChart: 'bar',
    currentField: 'gdp_nominal',
    chartColor: '#008080',
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

        setCurrentField: (state, { payload }: { payload: FieldTypes }) => {
            state.currentField = payload;
        },

        setChartColor: (state, { payload }: { payload: string }) => {
            state.chartColor = payload;
        },
    },
});

export const { setCurrentChartType, setCurrentField, setChartColor } =
    visualSlice.actions;

export default visualSlice.reducer;
