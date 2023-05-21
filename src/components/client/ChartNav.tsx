'use client';
import { changeChart } from '@/redux/reducers/chartsSlice';
import { AppDispatch, store } from '@/redux/store';
import { useDispatch } from 'react-redux';

const navItems: NavItems[] = [
    {
        id: 1,
        name: 'bar chart',
        sub: 'bar',
    },
    {
        id: 2,
        name: 'pie chart',
        sub: 'pie',
    },
    {
        id: 1,
        name: 'doughnut chart',
        sub: 'doughnut',
    },
];

const ChartNav = () => {
    const dispatch = useDispatch<AppDispatch>();

    const switchChartHandler = (sub: ChartCategory) => {
        dispatch(changeChart(sub));
    };

    return (
        <div className="w-full">
            <ul className="w-full h-full px-2 space-y-1 text-slate-600">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className="text-xl font-semibold p-2 cursor-pointer hover:bg-slate-100 duration-300"
                        onClick={() => switchChartHandler(item.sub)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChartNav;
