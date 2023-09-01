'use client';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineAreaChart } from 'react-icons/ai';
import SelectedCountry from './SelectedCountry';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { removeAllFromSelectedCountry } from '@/redux/countrySlice';
import { useRouter, usePathname } from 'next/navigation';

const SelectedCountries = () => {
    const { selectedCountries } = useSelector((s: RootState) => s.countrySlice);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const pathname = usePathname();

    const removeAllHandler = () => dispatch(removeAllFromSelectedCountry());

    return (
        <section className="w-full min-h-[60px] p-2 flex flex-wrap items-center rounded bg-blue-200">
            {selectedCountries ? (
                <>
                    {selectedCountries.map((c) => (
                        <SelectedCountry key={c.name} name={c.name} />
                    ))}
                </>
            ) : (
                <h4 className="px-4 uppercase text-lg font-semibold text-blue-700">
                    no country selected
                </h4>
            )}

            {selectedCountries &&
                selectedCountries.length >= 2 &&
                pathname !== '/country/visualize' && (
                    <>
                        <div
                            className="px-2 py-1 m-1 flex items-center space-x-2 rounded shadow cursor-pointer hover:opacity-80 active:opacity-100 bg-emerald-500 text-white"
                            onClick={() => router.push('/country/visualize')}
                        >
                            <p className="capitalize">visualize</p>
                            <AiOutlineAreaChart className="" />
                        </div>
                        <div
                            className="px-2 py-1 m-1 flex items-center space-x-2 rounded shadow cursor-pointer hover:opacity-80 active:opacity-100 bg-red-600 text-white"
                            onClick={removeAllHandler}
                        >
                            <p className="capitalize">clear all</p>
                            <RxCross2 className="" />
                        </div>
                    </>
                )}
        </section>
    );
};

export default SelectedCountries;
