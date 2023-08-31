'use client';
import Chart from '@/components/chart/Chart';
import ChartColor from '@/components/ChartColor';
import ChartTypeListSideBar from '@/components/ChartTypeListSideBar';
import ChartTypeMobile from '@/components/ChartTypeMobile';
import SelectedCountries from '@/components/SelectedCountries';
import SelectFields from '@/components/SelectFields';
import VisualizeAddCountries from '@/components/VisualizeAddCountries';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const Visualizer = () => {
    const { isMobileDrawerOpen } = useSelector(
        (s: RootState) => s.functionSlice
    );
    return (
        <div className="md:max-w-[1200px] mx-auto md:flex">
            <section className="w-[250px] p-2 hidden md:block">
                <ChartTypeListSideBar />
                <VisualizeAddCountries />
            </section>
            {isMobileDrawerOpen && <ChartTypeMobile />}

            <section className="w-full md:w-[950px] space-y-5 p-2">
                <SelectedCountries />
                <SelectFields />
                <ChartColor />
                <Chart />
            </section>
        </div>
    );
};

export default Visualizer;
