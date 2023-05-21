'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

import { Doughnut } from '@/lib/chartjs';

const DoughnutChart = () => {
    const { selectedCountries } = useSelector((s: RootState) => s.countries);
    const { type } = useSelector((s: RootState) => s.charts);

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
            <Doughnut
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
                            backgroundColor: selectedCountries.map(
                                (c) =>
                                    `rgb(${Math.floor(
                                        Math.random() * 255
                                    )},${Math.floor(
                                        Math.random() * 255
                                    )},${Math.floor(Math.random() * 255)})`
                            ),
                        },
                    ],
                }}
            />
        </div>
    );
};

export default DoughnutChart;
