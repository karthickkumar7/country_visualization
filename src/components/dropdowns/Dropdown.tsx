import store from '@/redux/store';
import {
    MainCategoriesString,
    StateNavItem,
    CountryNavItem,
} from '@/types/types';
import { Dispatch, SetStateAction } from 'react';
import { setCurrentView } from '@/redux/functionSlice';
import { countrySortBy } from '@/redux/countrySlice';
import { StateSortBy } from '@/redux/indiaSlice';

type Props = {
    item: StateNavItem | CountryNavItem;
    showDropdown: boolean;
    setShowDropdown: Dispatch<SetStateAction<boolean>>;
    mainCategory: MainCategoriesString;
};

const sortCountry = (subTitle: string) => {
    switch (subTitle) {
        case 'Name':
            store.dispatch(countrySortBy('name'));
            return;
        case 'Population':
            store.dispatch(countrySortBy('population'));
            return;
        case 'Area':
            store.dispatch(countrySortBy('area'));
            return;
        case 'Gdp (nom)':
            store.dispatch(countrySortBy('gdp_nominal'));
            return;
        case 'Gdp (ppp)':
            store.dispatch(countrySortBy('gdp_ppp'));
            return;
        default:
            return;
    }
};

const sortState = (subTitle: string) => {
    switch (subTitle) {
        case 'Name':
            store.dispatch(StateSortBy('name'));
            return;
        case 'Population':
            store.dispatch(StateSortBy('population'));
            return;
        case 'Area':
            store.dispatch(StateSortBy('area'));
            return;
        case 'Gdp':
            store.dispatch(StateSortBy('gdp'));
            return;
        case 'Gdp per capita':
            store.dispatch(StateSortBy('gdp_pc'));
            return;
        default:
            return;
    }
};

const Dropdown = ({ item, showDropdown, mainCategory }: Props) => {
    const dropdownActionHandler = (itemtitle: string, subTitle: string) => {
        if (itemtitle === 'view') {
            if (subTitle === 'table' || subTitle === 'grid')
                store.dispatch(setCurrentView(subTitle));
        } else if (itemtitle === 'sort') {
            if (mainCategory === 'country') {
                sortCountry(subTitle);
            }
            if (mainCategory === 'india') {
                sortState(subTitle);
            }
        }
    };

    return (
        <div className="">
            <p className="px-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200">
                {item.title}
            </p>
            {showDropdown && (
                <ul className="p-2 bg-white divide-y rounded shadow-lg absolute top-[40px] -left-[20px]">
                    {item.subMenu?.map((sub) => (
                        <li
                            key={sub.title}
                            className="px-3 py-1 cursor-pointer text-blue-700 hover:bg-blue-50 active:bg-blue-200"
                            onClick={() =>
                                dropdownActionHandler(item.title, sub.title)
                            }
                        >
                            {sub.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
