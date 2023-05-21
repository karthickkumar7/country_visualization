'use client';
import { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlinePlusSm } from 'react-icons/hi';
import {
    addSelectedCountry,
    filterCountries,
} from '@/redux/reducers/countriesSlice';

const SearchCountriesViz = () => {
    const [txt, setTxt] = useState('');
    const { filteredCountries } = useSelector((s: RootState) => s.countries);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        return () => {
            dispatch(filterCountries(''));
        };
    }, []);

    return (
        <div className="w-full py-4">
            <input
                type="text"
                placeholder="add more countries"
                value={txt}
                onChange={(e) => {
                    setTxt(e.target.value);
                    dispatch(filterCountries(e.target.value));
                }}
                className="px-2 py-1 rounded outline-none border"
            />

            {/* filter */}
            <ul className="mt-2">
                {txt &&
                    filteredCountries.map((cou) => (
                        <li
                            key={cou.id}
                            className="w-full py-1 px-2 flex items-center gap-4 cursor-pointer bg-sky-50 hover:bg-sky-100 active:bg-sky-200"
                            onClick={() => {
                                dispatch(addSelectedCountry(cou));
                            }}
                        >
                            <HiOutlinePlusSm className="text-lg hover:opacity-80" />
                            <span>
                                {cou.name.length > 12 ? cou.sub : cou.name}
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default SearchCountriesViz;
