'use client';
import store, { RootState } from '@/redux/store';
import { setChartColor } from '@/redux/visualSlice';
import { useSelector } from 'react-redux';

const ChartColor = () => {
    const { chartColor } = useSelector((s: RootState) => s.visualSlice);

    return (
        <div className="w-full flex flex-wrap space-x-3">
            <input
                type="color"
                value={chartColor}
                onChange={(e) => store.dispatch(setChartColor(e.target.value))}
            />
            <p className="text-lg font-semibold ml-4">{chartColor}</p>
        </div>
    );
};

export default ChartColor;
