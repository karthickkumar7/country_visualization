'use client';
import store, { RootState } from '@/redux/store';
import { Country } from '@/types/types';
import { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addToSelectedCountry } from '@/redux/countrySlice';
import { GoSearch } from 'react-icons/go';

const VisualizeAddCountries = () => {
    const [search, setSearch] = useState('');
    const [searchedCountries, setSearchedCountries] = useState<Country[]>([]);
    const { countries } = useSelector((s: RootState) => s.countrySlice);

    const filterCountriesSearch = (e?: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
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
    };

    useEffect(() => {
        filterCountriesSearch();
    }, [search, countries]);

    return (
        <div className="relative">
            <form onSubmit={(e) => filterCountriesSearch(e)}>
                <input
                    type="text"
                    placeholder="search country..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="outline-none px-2 py-1 border rounded bg-blue-100 placeholder:text-blue-700"
                />
            </form>

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
