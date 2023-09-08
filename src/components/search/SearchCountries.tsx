'use client';
import { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Country } from '@/types/types';

const SearchCountries = () => {
    const [search, setSearch] = useState('');
    const [searchedCountries, setSearchedCountries] = useState<Country[]>([]);
    const { countries, selectedCountries } = useSelector(
        (s: RootState) => s.countrySlice
    );

    useEffect(() => {
        if (search.length) {
            setSearchedCountries(
                countries.filter(
                    (c) =>
                        c.name.toLowerCase().includes(search.toLowerCase()) ||
                        (c.fullname &&
                            c.fullname
                                .toLowerCase()
                                .includes(search.toLowerCase()))
                )
            );
        } else {
            setSearchedCountries([]);
        }
    }, [search, countries]);

    return (
        <SearchInput
            search={search}
            setSearch={setSearch}
            searchedData={searchedCountries}
            setSearchedData={setSearchedCountries}
            mainCategoryString="country"
            placeholder="search country..."
        />
    );
};

export default SearchCountries;
