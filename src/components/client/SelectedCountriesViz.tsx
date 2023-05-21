'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import SelectedCountry from '../ui/SelectedCountry';

const SelectedCountriesViz = () => {
    const { selectedCountries } = useSelector((s: RootState) => s.countries);
    return (
        <div className="w-full">
            <ul className="w-full h-full px-2 gap-2 flex flex-wrap text-slate-600">
                {selectedCountries.map((cou) => (
                    <SelectedCountry key={cou.id} country={cou} />
                ))}
            </ul>
        </div>
    );
};

export default SelectedCountriesViz;
