import { createSlice } from '@reduxjs/toolkit';
import { countries } from '@/data/countries';

type InitialState = {
    allCountries: Country[];
    filteredCountries: Country[];
    selectedCountries: Country[];
};

const initialState: InitialState = {
    allCountries: countries,
    filteredCountries: countries,
    selectedCountries: [],
};

const countriesSlice = createSlice({
    name: 'countries',

    initialState,

    reducers: {
        addSelectedCountry: (state, { payload }: { payload: Country }) => {
            if (state.selectedCountries.length > 9) return;

            let exists = false;
            for (let i = 0; i < state.selectedCountries.length; i++) {
                if (state.selectedCountries[i].id === payload.id) {
                    exists = true;
                    break;
                }
            }

            if (!exists) {
                state.selectedCountries.push(payload);
            }
        },

        removeSelectedCountry: (state, { payload }: { payload: Country }) => {
            state.selectedCountries = state.selectedCountries.filter(
                (cou) => cou.id !== payload.id
            );
        },

        removeAllSelectedCountries: (state) => {
            state.selectedCountries = [];
        },

        filterCountries: (state, { payload }: { payload: string }) => {
            state.filteredCountries = state.allCountries.filter((cou) => {
                if (
                    cou.name.toLowerCase().includes(payload.toLowerCase()) ||
                    cou.continent
                        .toLowerCase()
                        .includes(payload.toLowerCase()) ||
                    (cou.sub &&
                        cou.sub.toLowerCase().includes(payload.toLowerCase()))
                )
                    return true;
            });
        },

        sort: (state, { payload }: { payload: 'acc' | 'dec' }) => {
            state.selectedCountries = state.selectedCountries.sort(
                (x, y) => x.area - y.area
            );
        },
    },
});

export const {
    addSelectedCountry,
    removeSelectedCountry,
    removeAllSelectedCountries,
    filterCountries,
    sort,
} = countriesSlice.actions;
export default countriesSlice.reducer;
