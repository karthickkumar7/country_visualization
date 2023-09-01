'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import Selected from './Selected';

const SelectedCountries = () => {
    const { selectedCountries } = useSelector((s: RootState) => s.countrySlice);
    return (
        <Selected
            data={selectedCountries}
            route="/country/visualize"
            type="country"
            noDataMsg="no country selected"
        />
    );
};

export default SelectedCountries;
