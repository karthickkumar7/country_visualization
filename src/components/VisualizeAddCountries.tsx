'use client';
import store, { RootState } from '@/redux/store';
import { Country } from '@/types/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addToSelectedCountry } from '@/redux/countrySlice';

const VisualizeAddCountries = () => {
    const [search, setSearch] = useState('');
    const [searchedCountries, setSearchedCountries] = useState<Country[]>([]);
    const { countries } = useSelector((s: RootState) => s.countrySlice);

    useEffect(() => {
        if (search.length) {
            setSearchedCountries(
                countries.filter(
                    (c) =>
                        c.name.includes(search) ||
                        (c.fullname && c.fullname.includes(search))
                )
            );
        } else {
            setSearchedCountries([]);
        }
    }, [search, countries]);

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="add country"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none px-2 py-1 shadow border"
            />

            {searchedCountries.length ? (
                <div className="w-full p-2 mt-4 shadow border absolute z-10 bg-white">
                    <ul className="divide-y">
                        {searchedCountries.map((c) => (
                            <li
                                key={c.name}
                                className="px-2 py-1 capitalize cursor-pointer hover:bg-blue-50 active:bg-blue-100"
                                onClick={() =>
                                    store.dispatch(addToSelectedCountry(c))
                                }
                            >
                                {c.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default VisualizeAddCountries;
