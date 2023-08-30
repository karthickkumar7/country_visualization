import { configureStore } from '@reduxjs/toolkit';
import countrySlice from '@/redux/countrySlice';
import functionSlice from '@/redux/functionSlice';
import visualSlice from '@/redux/visualSlice';

const store = configureStore({
    reducer: {
        countrySlice,
        functionSlice,
        visualSlice,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
