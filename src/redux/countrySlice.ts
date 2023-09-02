import { countries } from '@/data/countries';
import {
    Country,
    CountrySliceInitialState,
    CountrySortFields,
} from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CountrySliceInitialState = {
    countries: countries,
    selectedCountries: null,
};

const countrySlice = createSlice({
    name: 'country',

    initialState,

    reducers: {
        addToSelectedCountry: (state, { payload }: { payload: Country }) => {
            if (state.selectedCountries) {
                const countryAlreadyExists = state.selectedCountries.find(
                    (c) => c.name === payload.name
                );
                if (!countryAlreadyExists) {
                    state.selectedCountries.push(payload);
                } else {
                    state.selectedCountries = state.selectedCountries.filter(
                        (c) => c.name !== payload.name
                    );

                    if (
                        state.selectedCountries &&
                        !state.selectedCountries.length
                    )
                        state.selectedCountries = null;
                }
            } else {
                state.selectedCountries = [payload];
            }
        },

        removeFromSelectedCountry: (
            state,
            { payload }: { payload: string }
        ) => {
            if (state.selectedCountries) {
                state.selectedCountries = state.selectedCountries.filter(
                    (c) => c.name !== payload
                );
            }

            if (state.selectedCountries && !state.selectedCountries.length) {
                state.selectedCountries = null;
            }
        },

        removeAllFromSelectedCountry: (state) => {
            state.selectedCountries = null;
        },

        countrySortBy: (state, { payload }: { payload: CountrySortFields }) => {
            if (payload !== 'name')
                state.countries = state.countries.sort(
                    (x, y) => y[payload] - x[payload]
                );
        },
    },
});

export const {
    addToSelectedCountry,
    removeFromSelectedCountry,
    removeAllFromSelectedCountry,
    countrySortBy,
} = countrySlice.actions;

export default countrySlice.reducer;
