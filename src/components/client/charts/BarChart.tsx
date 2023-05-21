'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Bar, ChartJS } from '@/lib/chartjs';
import { sort } from '@/redux/reducers/countriesSlice';

const BarChart = () => {
    const [barChartType, setBarChartType] = useState<'x' | 'y'>('y');
    const { selectedCountries } = useSelector((s: RootState) => s.countries);
    const { type } = useSelector((s: RootState) => s.charts);
    const dispatch = useDispatch<AppDispatch>();

    const chartRef = useRef<ChartJS<'bar'>>(null);

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
            <div className="px-2 py-2 flex items-center space-x-8 ring-1">
                <div>
                    <label
                        htmlFor="index"
                        className="text-lg tracking-wide mr-4"
                    >
                        Bar Chart Type
                    </label>
                    <select
                        name="index"
                        id="index"
                        className="p-2"
                        onChange={(e) => {
                            setBarChartType(e.target.value as 'x' | 'y');
                        }}
                    >
                        <option value="y">horizontal</option>
                        <option value="x">vertical</option>
                    </select>
                </div>

                <div>
                    <p
                        className="text-xl font-semibold"
                        onClick={() => dispatch(sort('acc'))}
                    >
                        sort
                    </p>
                </div>
            </div>

            <Bar
                ref={chartRef}
                options={{
                    indexAxis: barChartType,
                }}
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
                redraw
            />
        </div>
    );
};

export default BarChart;
