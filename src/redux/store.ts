import { configureStore } from '@reduxjs/toolkit';
import countrySlice from '@/redux/countrySlice';
import functionSlice from '@/redux/functionSlice';
import visualSlice from '@/redux/visualSlice';
import indiaSlice from '@/redux/indiaSlice';

const store = configureStore({
    reducer: {
        countrySlice,
        functionSlice,
        visualSlice,
        indiaSlice,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
