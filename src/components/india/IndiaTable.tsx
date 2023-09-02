'use client';
import { addToSelectedStates } from '@/redux/indiaSlice';
import store, { RootState } from '@/redux/store';
import { India } from '@/types/types';
import { inSelected, parseArea } from '@/utils/countries';
import { useSelector } from 'react-redux';

const IndiaTable = () => {
    const { india, selectedStates } = useSelector(
        (s: RootState) => s.indiaSlice
    );

    const selectState = (state: India) => {
        store.dispatch(addToSelectedStates(state));
    };

    return (
        <table className="w-full mt-4">
            <thead className="w-full">
                <tr className="w-full px-1 flex justify-between capitalize text-sm md:text-xl rounded-t duration-300 bg-blue-600 text-white">
                    <th className="w-[5%] h-full py-4 px-1 hidden md:inline-flex">
                        no
                    </th>
                    <th className="w-[20%] h-full py-4">name</th>
                    <th className="w-[20%] h-full py-4">abbr</th>
                    <th className="w-[20%] h-full py-4">gpd (bil)</th>
                    <th className="w-[20%] h-full py-4">gpd pc (bil)</th>
                    <th className="w-[20%] h-full py-4">
                        area (km<sup>2</sup>)
                    </th>
                    <th className="w-[20%] h-full py-4">population (mil)</th>
                </tr>
            </thead>

            <tbody className="w-full">
                {india.map((state, i) => (
                    <tr
                        key={state.name}
                        className={`w-full px-1 py-3 md:py-2 flex justify-between text-xs md:text-lg font-semibold cursor-pointer border ${
                            inSelected(state, selectedStates)
                                ? 'bg-blue-100'
                                : 'hover:bg-slate-100'
                        }`}
                        onClick={() => selectState(state)}
                    >
                        <td className="w-[5%] hidden md:inline-flex">
                            {i + 1}
                        </td>
                        <td className="w-[20%] pl-2 capitalize">
                            {state.fullname}
                        </td>
                        <td className="w-[5%] pl-2 md:pl-12 capitalize">
                            {state.name}
                        </td>
                        <td className="w-[15%] pl-8 md:pl-28 capitalize">
                            {parseArea(state.gdp)}
                        </td>
                        <td className="w-[20%] pl-8 md:pl-24 capitalize">
                            {parseArea(state.gdp_pc)}
                        </td>
                        <td className="w-[20%] pl-4 md:px-24">
                            {parseArea(state.area)}
                        </td>
                        <td className="w-[20%] px-4 md:px-12">
                            {(state.population / 1e6).toFixed(2)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default IndiaTable;
