'use client';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineAreaChart } from 'react-icons/ai';
import SelectedData from './SelectedData';
import { removeAllFromSelectedCountry } from '@/redux/countrySlice';
import { useRouter, usePathname } from 'next/navigation';
import { Country, India } from '@/types/types';
import store from '@/redux/store';
import { removeAllFromSelectedState } from '@/redux/indiaSlice';

type Props = {
    data: Country[] | India[] | null;
    route: string;
    type: 'country' | 'india';
    noDataMsg: string;
};

const Selected = ({ data, route, type, noDataMsg }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    //  CHANGE
    const removeAllHandler = () => {
        switch (type) {
            case 'country':
                store.dispatch(removeAllFromSelectedCountry());
                return;
            case 'india':
                store.dispatch(removeAllFromSelectedState());
            default:
                return;
        }
    };

    return (
        <section className="w-full min-h-[60px] p-2 flex flex-wrap items-center rounded">
            {data ? (
                <>
                    {data.map((c) => (
                        <SelectedData
                            key={c.name}
                            name={c.name}
                            fullname={c.fullname}
                            mainCategory={type}
                        />
                    ))}
                </>
            ) : (
                <h4 className="px-4 uppercase text-lg font-semibold text-blue-700">
                    {noDataMsg}
                </h4>
            )}

            {data && data.length >= 2 && pathname !== '/country/visualize' && (
                <>
                    <div
                        className="px-2 py-1 m-1 flex items-center space-x-2 rounded shadow cursor-pointer hover:opacity-80 active:opacity-100 bg-emerald-500 text-white"
                        onClick={() => router.push(route)}
                    >
                        <p className="capitalize">visualize</p>
                        <AiOutlineAreaChart className="" />
                    </div>
                    <div
                        className="px-2 py-1 m-1 flex items-center space-x-2 rounded shadow cursor-pointer hover:opacity-80 active:opacity-100 bg-red-700 text-white"
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

export default Selected;
