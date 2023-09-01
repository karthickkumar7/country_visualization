'use client';

import { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Country, India } from '@/types/types';

const SearchIndia = () => {
    const [search, setSearch] = useState('');
    const [searchedStates, setSearchedStates] = useState<India[]>([]);
    const { india } = useSelector((s: RootState) => s.indiaSlice);

    useEffect(() => {
        if (search.length) {
            setSearchedStates(
                india.filter(
                    (c) =>
                        c.name.toLowerCase().includes(search.toLowerCase()) ||
                        (c.fullname &&
                            c.fullname
                                .toLowerCase()
                                .includes(search.toLowerCase()))
                )
            );
        } else {
            setSearchedStates([]);
        }
    }, [india, search]);
    return (
        <SearchInput
            search={search}
            setSearch={setSearch}
            searchedData={searchedStates}
            setSearchedData={setSearchedStates}
            mainCategoryString="india"
            placeholder="search states..."
        />
    );
};

export default SearchIndia;
