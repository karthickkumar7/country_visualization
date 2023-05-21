'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineManageSearch } from 'react-icons/md';
import { AppDispatch } from '@/redux/store';
import { filterCountries } from '@/redux/reducers/countriesSlice';

const Search = () => {
    const [txt, setTxt] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="w-[300px] px-2 flex items-center ring-1 rounded">
            <MdOutlineManageSearch className="text-2xl text-sky-500" />
            <input
                type="text"
                placeholder="search"
                value={txt}
                onChange={(e) => {
                    setTxt(e.target.value);
                    dispatch(filterCountries(e.target.value));
                }}
                className="w-[300px] px-2 py-3 outline-none"
            />
        </div>
    );
};

export default Search;
