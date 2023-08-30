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

const Chart = () => {
    const { selectedCountries } = useSelector((s: RootState) => s.countrySlice);
    const { currentField } = useSelector((s: RootState) => s.visualSlice);

    const data = selectedCountries?.map((c) => {
        return {
            name: c.name,
            // [currentField]: c[currentField],
            population: c.population,
            area: c.area,
            gdp_nominal: c.gdp_nominal,
            gdp_ppp: c.gdp_ppp,
        };
    });

    return (
        <div className="">
            <BarChart
                width={730}
                height={250}
                data={data}
                layout="horizontal"
                className="ml-2"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" />
                <XAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="population" fill="#008080" />
            </BarChart>
        </div>
    );
};

export default Chart;
