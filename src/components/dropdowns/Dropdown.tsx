import store from '@/redux/store';
import { NavItem } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';
import { setCurrentView } from '@/redux/functionSlice';

type Props = {
    item: NavItem;
    showDropdown: boolean;
    setShowDropdown: Dispatch<SetStateAction<boolean>>;
};

const Dropdown = ({ item, showDropdown }: Props) => {
    const test = (Itemtitle: string, subTitle: 'grid' | 'table') => {
        if (Itemtitle === 'view') {
            store.dispatch(setCurrentView(subTitle));
        }
    };
    return (
        <div className="">
            <p className="px-2 cursor-pointer hover:bg-slate-100 active:bg-slate-200">
                {item.title}
            </p>
            {showDropdown && (
                <ul className="p-2 bg-white rounded shadow-lg absolute left-0">
                    {item.subMenu?.map((sub) => (
                        <li
                            key={sub.title}
                            className="px-3 py-1 cursor-pointer hover:bg-slate-100 active:bg-slate-200"
                            onClick={() =>
                                test(item.title, sub.title as 'table' | 'grid')
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
