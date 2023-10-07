'use client';
import store from '@/redux/store';
import {
    Country,
    India,
    MainCategories,
    MainCategoriesString,
} from '@/types/types';
import { Dispatch, SetStateAction } from 'react';
import { addToSelectedCountry } from '@/redux/countrySlice';
import { RxCross2 } from 'react-icons/rx';
import { addToSelectedStates } from '@/redux/indiaSlice';

type Props = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    searchedData: Country[] | India[];
    setSearchedData:
        | Dispatch<SetStateAction<Country[]>>
        | Dispatch<SetStateAction<India[]>>;
    mainCategoryString: MainCategoriesString;
    placeholder: string;
};

const SearchInput = ({
    search,
    setSearch,
    searchedData,
    setSearchedData,
    mainCategoryString,
    placeholder,
}: Props) => {
    const addToSelectedHandler = (mainCategoryData: MainCategories) => {
        switch (mainCategoryString) {
            case 'country':
                store.dispatch(
                    addToSelectedCountry(mainCategoryData as Country)
                );
                return;
            case 'india':
                store.dispatch(addToSelectedStates(mainCategoryData as India));
                return;
            default:
                return;
        }
    };

    const closeSearchDropdownHandler = () => {
        setSearchedData([]);
        setSearch('');
    };

    return (
        <div className="w-full relative">
            <div className="w-full px-2 py-1 flex items-center overflow-hidden bg-slate-700">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="outline-none px-2 py-1 w-[90%] rounded bg-slate-700 text-slate-200 placeholder:text-slate-200"
                />
                {search.length ? (
                    <RxCross2
                        className="w-[10%] text-lg cursor-pointer text-slate-200 hover:opacity-60 active:opacity-100"
                        onClick={closeSearchDropdownHandler}
                    />
                ) : null}
            </div>

            {searchedData.length ? (
                <div className="w-full p-2 mt-4 shadow border absolute z-10 max-h-[500px] md:max-h-[600px] overflow-y-auto bg-white">
                    <ul className="divide-y">
                        {searchedData.map((c) => (
                            <li
                                key={c.name}
                                className="px-2 py-1 capitalize cursor-pointer hover:bg-blue-50 active:bg-blue-100"
                                onClick={() => addToSelectedHandler(c)}
                            >
                                {c.fullname ? c.fullname : c.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default SearchInput;
