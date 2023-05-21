'use client';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { removeSelectedCountry } from '@/redux/reducers/countriesSlice';

interface Props {
    country: Country;
}

const SelectedCountry = ({ country }: Props) => {
    const dispatch = useDispatch<AppDispatch>();

    const removeSelectedCountryHandler = (country: Country) => {
        dispatch(removeSelectedCountry(country));
    };

    return (
        <li className="px-2 py-1 flex items-center gap-2 capitalize rounded bg-sky-500 text-white">
            <span>{country.name}</span>
            <RxCross2
                className="cursor-pointer hover:opacity-80 active:opacity-100"
                onClick={() => removeSelectedCountryHandler(country)}
            />
        </li>
    );
};

export default SelectedCountry;
