'use client';

import dynamic from 'next/dynamic';
import BarChart from './BarChart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { MainCategoriesString } from '@/types/types';

type Props = {
    mainCategory: MainCategoriesString;
};

const Chart = ({ mainCategory }: Props) => {
    const TreeMap = dynamic(() => import('./TreeMap'), { ssr: false });
    const PieChart = dynamic(() => import('./PieChart'), { ssr: false });
    const { currentChart } = useSelector((s: RootState) => s.visualSlice);

    const chartTypeRender = {
        bar: <BarChart mainCategory={mainCategory} />,
        tree: <TreeMap mainCategory={mainCategory} />,
        pie: <PieChart mainCategory={mainCategory} />,
    };

    return <div className="w-full">{chartTypeRender[currentChart]}</div>;
};

export default Chart;
