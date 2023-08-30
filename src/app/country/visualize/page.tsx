'use client';
import SelectedCountries from '@/components/SelectedCountries';
import SelectFields from '@/components/selectFields/SelectFields';
import store from '@/redux/store';
import { setCurrentChartType } from '@/redux/visualSlice';
import { ChartListTypes } from '@/types/types';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const chartTypes: ChartListTypes[] = [
    {
        title: 'Bar chart',
        sub: 'bar',
    },
    {
        title: 'Pie chart',
        sub: 'pie',
    },
    {
        title: 'Tree map',
        sub: 'tree',
    },
];

const page = () => {
    const Chart = dynamic(() => import('@/components/chart/Chart'), {
        ssr: false,
    });
    return (
        <div className="max-w-[1200px] mx-auto flex">
            <section className="w-[250px]">
                <div>
                    <ul className="p-1 space-y-4 text-lg font-semibold ">
                        {chartTypes.map((chart) => (
                            <li
                                key={chart.title}
                                className="p-2 cursor-pointer rounded hover:bg-blue-100 active:bg-blue-200"
                                onClick={() =>
                                    store.dispatch(
                                        setCurrentChartType(chart.sub)
                                    )
                                }
                            >
                                {chart.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="w-[950px]">
                <SelectedCountries />
                <SelectFields />
                {/* <Suspense fallback={<p>loading...</p>}>
                    <Chart />
                </Suspense> */}
            </section>
        </div>
    );
};

export default page;
