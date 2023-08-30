'use client';
import { NavItem } from '@/types/types';
import React, { useState } from 'react';
import Dropdown from './Dropdown';

type Props = {
    item: NavItem;
};

const Item = ({ item }: Props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <li
            className="relative"
            key={item.title}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            {item.subMenu ? (
                <Dropdown
                    item={item}
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />
            ) : (
                <p className="px-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200">
                    {item.title}
                </p>
            )}
        </li>
    );
};

export default Item;
