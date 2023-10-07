'use client';
import { RootState } from '@/redux/store';
import { MainCategoriesString } from '@/types/types';
// import { genRandomColor } from '@/utils/countries';
import { useSelector } from 'react-redux';
import {
    Bar,
    BarChart,
    Cell,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

type Props = {
    mainCategory: MainCategoriesString;
};

const BarchartH = ({ mainCategory }: Props) => {
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
        <div className="w-full overflow-x-auto mt-4">
            <ResponsiveContainer width="95%" height={250}>
                <BarChart data={setData()} layout="horizontal" maxBarSize={100}>
                    <YAxis type="number" tick={{ fill: '#fff' }} />
                    <XAxis
                        dataKey="name"
                        type="category"
                        tick={{ fill: '#fff' }}
                    />
                    <Tooltip cursor={{ fill: 'none', opacity: '60%' }} />
                    <Legend />
                    <Bar dataKey={getDataKey()}>
                        {setData()?.map((entry, index) => (
                            <Cell key={entry.name} fill="#65e137" />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarchartH;
