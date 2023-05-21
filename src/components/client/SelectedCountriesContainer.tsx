'use client';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { ImStatsBars } from 'react-icons/im';
import { AppDispatch, RootState } from '@/redux/store';
import { removeAllSelectedCountries } from '@/redux/reducers/countriesSlice';
import SelectedCountry from '../ui/SelectedCountry';

const SelectedCountriesContainer = () => {
    const { selectedCountries } = useSelector((s: RootState) => s.countries);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const removeAllSelectedCountriesHandler = () => {
        dispatch(removeAllSelectedCountries());
    };

    return (
        <div className="py-4 px-2 min-h-[50px] bg-sky-50">
            {!selectedCountries.length && (
                <h1 className="text-lg font-semibold text-slate-600">
                    No Countries Selected
                </h1>
            )}
            <ul className="w-full h-full flex flex-wrap gap-2">
                {selectedCountries.map((cou) => (
                    <SelectedCountry key={cou.id} country={cou} />
                ))}
                {selectedCountries.length > 1 ? (
                    <>
                        <li
                            className="px-2 py-1 flex items-center gap-2 capitalize rounded cursor-pointer bg-red-500 text-white"
                            onClick={removeAllSelectedCountriesHandler}
                        >
                            <span>remove all</span>
                            <RxCross2 />
                        </li>
                        <li
                            className="px-2 py-1 flex items-center gap-2 capitalize rounded cursor-pointer bg-green-600 text-white"
                            onClick={() => router.push('/visualize')}
                        >
                            <span>visualize</span>
                            <ImStatsBars />
                        </li>
                    </>
                ) : null}
            </ul>
        </div>
    );
};

export default SelectedCountriesContainer;
