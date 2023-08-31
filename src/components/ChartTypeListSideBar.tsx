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
            <ul className="p-1 space-y-4 text-lg font-semibold ">
                {chartTypes.map((chart) => (
                    <li
                        key={chart.title}
                        className="p-2 cursor-pointer rounded hover:bg-blue-50 active:bg-blue-100"
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
