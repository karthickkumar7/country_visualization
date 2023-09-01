'use client';

import { RootState } from '@/redux/store';
import { MainCategoriesString } from '@/types/types';
import { useSelector } from 'react-redux';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
    mainCategory: MainCategoriesString;
};

const PieChartComp = ({ mainCategory }: Props) => {
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
        <div className="w-full">
            <ResponsiveContainer width="90%" height="300px" aspect={1.2}>
                <PieChart className="">
                    <Pie
                        data={setData()}
                        dataKey={getDataKey()}
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
