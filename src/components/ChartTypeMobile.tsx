'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import store, { RootState } from '@/redux/store';
import { ChartListTypes } from '@/types/types';
import { setCurrentChartType } from '@/redux/visualSlice';
import { usePathname } from 'next/navigation';
import SearchCountries from './search/SearchCountries';
import SearchIndia from './search/SearchIndia';

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

const ChartTypeMobile = () => {
    const { currentChart } = useSelector((s: RootState) => s.visualSlice);

    const pathname = usePathname();

    const renderSearchInput = () => {
        switch (pathname) {
            case '/country/visualize':
                return <SearchCountries />;

            case '/india/visualize':
                return <SearchIndia />;
            default:
                return null;
        }
    };

    return (
        <section className="w-[250px] p-2 block md:hidden">
            <ul>
                {chartTypes.map((chart) => (
                    <li
                        key={chart.title}
                        className={`px-2 py-1 font-semibold cursor-pointer rounded ${
                            currentChart === chart.sub
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-blue-50'
                        }`}
                        onClick={() =>
                            store.dispatch(setCurrentChartType(chart.sub))
                        }
                    >
                        {chart.title}
                    </li>
                ))}
                <li className="mt-2">{renderSearchInput()}</li>
            </ul>
        </section>
    );
};

export default ChartTypeMobile;
