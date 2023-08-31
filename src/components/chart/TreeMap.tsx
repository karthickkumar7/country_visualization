'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { ResponsiveContainer, Tooltip, Treemap } from 'recharts';

const TreeMap = () => {
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
        <div className="p-2 w-full h-[400px]">
            <ResponsiveContainer width="95%">
                <Treemap
                    // width={900}
                    // height={400}
                    data={data}
                    dataKey={currentField}
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
