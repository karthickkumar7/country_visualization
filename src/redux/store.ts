import { configureStore } from '@reduxjs/toolkit';
import countries from './reducers/countriesSlice';
import charts from './reducers/chartsSlice';

export const store = configureStore({
    reducer: { countries, charts },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
