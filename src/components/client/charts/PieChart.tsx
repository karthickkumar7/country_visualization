'use client';
import { RootState } from '@/redux/store';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { Pie, ChartJS } from '@/lib/chartjs';

const PieChart = () => {
    const { selectedCountries } = useSelector((s: RootState) => s.countries);
    const { type } = useSelector((s: RootState) => s.charts);

    const chartRef = useRef<ChartJS<'pie'>>(null);

    const renderType = () => {
        switch (type) {
            case 'area':
                return 'area';
            case 'population':
                return 'population';
            case 'gdp nominal':
                return 'gdp_nom';
            case 'gdp ppp':
                return 'gdp_ppp';
        }
    };

    return (
        <div>
            <Pie
                ref={chartRef}
                options={{}}
                data={{
                    labels: selectedCountries.map((cou) =>
                        cou.name.length > 12 ? cou.sub : cou.name
                    ),
                    datasets: [
                        {
                            data: selectedCountries.map(
                                (cou) => cou[renderType()]
                            ),
                        },
                    ],
                }}
            />
        </div>
    );
};

export default PieChart;
