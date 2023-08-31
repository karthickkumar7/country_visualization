'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const BarchartH = () => {
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
        <div className="w-full overflow-x-auto">
            <ResponsiveContainer width="95%" height={250}>
                <BarChart
                    // width={730}
                    // height={250}
                    data={data}
                    layout="horizontal"
                    className="ml-2"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis type="number" />
                    <XAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={currentField} fill={chartColor} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarchartH;
