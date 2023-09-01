'use client';
import { RootState } from '@/redux/store';
import { MainCategoriesString } from '@/types/types';
import { useSelector } from 'react-redux';
import { ResponsiveContainer, Tooltip, Treemap } from 'recharts';

type Props = {
    mainCategory: MainCategoriesString;
};

const TreeMap = ({ mainCategory }: Props) => {
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
        <div className="p-2 w-full h-[400px]">
            <ResponsiveContainer width="95%">
                <Treemap
                    // width={900}
                    // height={400}
                    data={setData()}
                    dataKey={getDataKey()}
                    aspectRatio={4 / 3}
                    stroke="#fff"
                    animationDuration={300}
                    fill={chartColor}
                    nameKey="name"
                >
                    <Tooltip />
                </Treemap>
            </ResponsiveContainer>
        </div>
    );
};

export default TreeMap;
