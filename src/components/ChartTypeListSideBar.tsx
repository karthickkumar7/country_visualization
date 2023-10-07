'use client';
import store from '@/redux/store';
import { setCurrentChartType } from '@/redux/visualSlice';
import { ChartListTypes } from '@/types/types';

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

const ChartTypeListSideBar = () => {
    return (
        <div>
            <ul className="p-2 mb-6 space-y-4 text-lg font-semibold shadow-lg rounded-lg bg-slate-800 text-slate-200">
                <h4 className="text-xl px-4 uppercase font-bold cursor-default">
                    Chart Types
                </h4>
                {chartTypes.map((chart) => (
                    <li
                        key={chart.title}
                        className={`px-4 py-2 cursor-pointer rounded tracking-wide duration-300 hover:bg-slate-700 active:bg-slate-600`}
                        onClick={() =>
                            store.dispatch(setCurrentChartType(chart.sub))
                        }
                    >
                        {chart.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChartTypeListSideBar;
