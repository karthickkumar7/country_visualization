'use client';
import { useSelector } from 'react-redux';
import BarChart from '@/components/client/charts/BarChart';
import PieChart from '@/components/client/charts/PieChart';
import { RootState } from '@/redux/store';
import DoughnutChart from '@/components/client/charts/DoughnutChart';

const Visualize = () => {
    const { currentChart } = useSelector((s: RootState) => s.charts);

    const renderChart = () => {
        switch (currentChart) {
            case 'bar':
                return <BarChart />;
            case 'pie':
                return <PieChart />;
            case 'doughnut':
                return <DoughnutChart />;
            default:
                return <BarChart />;
        }
    };

    return (
        <>
            {/* <BarChart /> */}
            {renderChart()}
        </>
    );
};

export default Visualize;
