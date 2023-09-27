'use client';
import {
    CountryNavItem,
    MainCategoriesString,
    StateNavItem,
} from '@/types/types';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

type Props = {
    item: StateNavItem | CountryNavItem;
    mainCategory: MainCategoriesString;
};

const Item = ({ item, mainCategory }: Props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <li
            className="relative px-4 py-2 shadow hover:bg-slate-100 active:bg-slate-200"
            key={item.title}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            {item.subMenu ? (
                <Dropdown
                    item={item}
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                    mainCategory={mainCategory}
                />
            ) : (
                <p className="cursor-pointer">{item.title}</p>
            )}
        </li>
    );
};

export default Item;
