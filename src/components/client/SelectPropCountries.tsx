'use client';
import { setType } from '@/redux/reducers/chartsSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SelectPropCountries = () => {
    const { type } = useSelector((s: RootState) => s.charts);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <select
            name="type"
            id="type"
            value={type}
            className="py-3 px-2 rounded cursor-pointer my-4 ring-1"
            onChange={(e) =>
                dispatch(
                    setType(
                        e.target.value as
                            | 'area'
                            | 'population'
                            | 'gdp nominal'
                            | 'gdp ppp'
                    )
                )
            }
        >
            <option value="area">area</option>
            <option value="population">population</option>
            <option value="gdp nominal">gdp nominal</option>
            <option value="gdp ppp">gdp ppp</option>
        </select>
    );
};

export default SelectPropCountries;
