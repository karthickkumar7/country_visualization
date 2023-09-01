import {
    ChartTypes,
    CountryFieldTypes,
    StateFieldTypes,
    VisualSliceInitialState,
} from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: VisualSliceInitialState = {
    currentChart: 'bar',
    currentCountryField: 'gdp_nominal',
    currentStateField: 'population',
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

        setCurrentCountryField: (
            state,
            { payload }: { payload: CountryFieldTypes }
        ) => {
            state.currentCountryField = payload;
        },
        setCurrentStateField: (
            state,
            { payload }: { payload: StateFieldTypes }
        ) => {
            state.currentStateField = payload;
        },

        setChartColor: (state, { payload }: { payload: string }) => {
            state.chartColor = payload;
        },
    },
});

export const {
    setCurrentChartType,
    setCurrentCountryField,
    setCurrentStateField,
    setChartColor,
} = visualSlice.actions;

export default visualSlice.reducer;
