'use client';
import { RootState } from '@/redux/store';
import { MainCategoriesString } from '@/types/types';
import { genRandomColor } from '@/utils/countries';
import { useSelector } from 'react-redux';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

type Props = {
    mainCategory: MainCategoriesString;
};

const BarchartV = ({ mainCategory }: Props) => {
    const { selectedCountries } = useSelector((s: RootState) => s.countrySlice);
    const { selectedStates } = useSelector((s: RootState) => s.indiaSlice);
    const { currentCountryField, currentStateField, chartColor } = useSelector(
        (s: RootState) => s.visualSlice
    );

    const setData = () => {
        switch (mainCategory) {
            case 'country':
                return selectedCountries?.map((c) => {
                    return {
                        name: c.name,
                        [currentCountryField]: c[currentCountryField],
                    };
                });
            case 'india':
                return selectedStates?.map((c) => {
                    return {
                        name: c.name,
                        [currentStateField]: c[currentStateField],
                    };
                });
        }
    };

    const getDataKey = () => {
        switch (mainCategory) {
            case 'country':
                return currentCountryField;
            case 'india':
                return currentStateField;
        }
    };

    return (
        <div className="overflow-x-auto">
            <BarChart
                width={730}
                height={250}
                data={setData()}
                layout="vertical"
                className="ml-2"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey={getDataKey()} fill={chartColor}>
                    {setData()?.map((entry, index) => (
                        <Cell key={entry.name} fill={genRandomColor()} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default BarchartV;
