'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const BarchartV = () => {
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
        <div className="overflow-x-auto">
            <BarChart
                width={730}
                height={250}
                data={data}
                layout="vertical"
                className="ml-2"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey={currentField} fill={chartColor} />
            </BarChart>
        </div>
    );
};

export default BarchartV;
