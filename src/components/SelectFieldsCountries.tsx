'use client';
import store, { RootState } from '@/redux/store';
import { setCurrentCountryField } from '@/redux/visualSlice';
import { SelectFieldsCountries } from '@/types/types';
import { useSelector } from 'react-redux';

const selectFields: SelectFieldsCountries[] = [
    {
        title: 'Population',
        sub: 'population',
    },
    {
        title: 'Area',
        sub: 'area',
    },
    {
        title: 'Gdp nominal',
        sub: 'gdp_nominal',
    },
    {
        title: 'Gdp ppp',
        sub: 'gdp_ppp',
    },
];

const SelectFieldsCountries = () => {
    const { currentCountryField } = useSelector(
        (s: RootState) => s.visualSlice
    );

    return (
        <div className="w-full px-2 py-3 md:py-4 flex justify-center mt-4 text-xs md:text-base shadow-lg rounded">
            {selectFields.map((s) => (
                <div
                    key={s.title}
                    className={`p-2 md:px-4 md:py-2 mr-5 cursor-pointer rounded-full active:bg-blue-200 active:shadow duration-300 ${
                        currentCountryField === s.sub
                            ? 'bg-blue-400 text-white font-semibold tracking-wide shadow-lg'
                            : 'hover:bg-sky-50 text-slate-700'
                    }`}
                    onClick={() =>
                        store.dispatch(setCurrentCountryField(s.sub))
                    }
                >
                    <p>{s.title}</p>
                </div>
            ))}
        </div>
    );
};

export default SelectFieldsCountries;
