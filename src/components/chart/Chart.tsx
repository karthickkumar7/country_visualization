'use client';

import dynamic from 'next/dynamic';
import BarChart from './BarChart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Chart = () => {
    const TreeMap = dynamic(() => import('./TreeMap'), { ssr: false });
    const PieChart = dynamic(() => import('./PieChart'), { ssr: false });
    const { currentChart } = useSelector((s: RootState) => s.visualSlice);
    const { selectedCountries } = useSelector((s: RootState) => s.countrySlice);

    const chartTypeRender = {
        bar: <BarChart />,
        tree: <TreeMap />,
        pie: <PieChart />,
    };

    return (
        <div className="w-full">
            {selectedCountries && chartTypeRender[currentChart]}
        </div>
    );
};

export default Chart;
