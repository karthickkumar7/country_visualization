'use client';

import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const PieChartComp = () => {
    const { selectedCountries } = useSelector((s: RootState) => s.countrySlice);
    const { currentField, chartColor } = useSelector(
        (s: RootState) => s.visualSlice
    );

    const data = selectedCountries?.map((c) => {
        return {
            name: c.name,
            [currentField]: c[currentField],
        };
    });
    return (
        <div className="w-full">
            <ResponsiveContainer width="95%" height="400px" aspect={1}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey={currentField}
                        nameKey="name"
                        name="name"
                        cx="50%"
                        cy="50%"
                        label
                        outerRadius={120}
                        animationDuration={300}
                        fill={chartColor}
                    />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartComp;
