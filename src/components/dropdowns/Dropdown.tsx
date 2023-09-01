import store from '@/redux/store';
import { NavItem } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';
import { setCurrentView } from '@/redux/functionSlice';
import { sortBy } from '@/redux/countrySlice';

type Props = {
    item: NavItem;
    showDropdown: boolean;
    setShowDropdown: Dispatch<SetStateAction<boolean>>;
};

const Dropdown = ({ item, showDropdown }: Props) => {
    const dropdownActionHandler = (itemtitle: string, subTitle: string) => {
        if (itemtitle === 'view') {
            if (subTitle === 'table' || subTitle === 'grid')
                store.dispatch(setCurrentView(subTitle));
        } else if (itemtitle === 'sort') {
            switch (subTitle) {
                case 'Name':
                    store.dispatch(sortBy('name'));
                    return;
                case 'Population':
                    store.dispatch(sortBy('population'));
                    return;
                case 'Area':
                    store.dispatch(sortBy('area'));
                    return;
                case 'Gdp (nom)':
                    store.dispatch(sortBy('gdp_nominal'));
                    return;
                case 'Gdp (ppp)':
                    store.dispatch(sortBy('gdp_ppp'));
                    return;
                default:
                    return;
            }
        }
    };

    return (
        <div className="">
            <p className="px-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200">
                {item.title}
            </p>
            {showDropdown && (
                <ul className="p-2 bg-blue-100 rounded shadow-lg absolute top-[25px] -left-[20px]">
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
