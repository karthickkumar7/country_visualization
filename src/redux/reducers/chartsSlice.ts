import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    type: 'area' | 'population' | 'gdp nominal' | 'gdp ppp';
    currentChart: ChartCategory;
};

const initialState: InitialState = {
    type: 'area',
    currentChart: 'bar',
};

const chartsSlice = createSlice({
    name: 'charts',

    initialState,

    reducers: {
        setType: (
            state,
            {
                payload,
            }: { payload: 'area' | 'population' | 'gdp nominal' | 'gdp ppp' }
        ) => {
            state.type = payload;
        },

        changeChart: (state, { payload }: { payload: ChartCategory }) => {
            state.currentChart = payload;
        },
    },
});

export const { setType, changeChart } = chartsSlice.actions;
export default chartsSlice.reducer;
