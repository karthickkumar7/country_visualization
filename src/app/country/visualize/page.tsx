'use client';
import Chart from '@/components/chart/Chart';
import ChartColor from '@/components/ChartColor';
import ChartTypeListSideBar from '@/components/ChartTypeListSideBar';
import ChartTypeMobile from '@/components/ChartTypeMobile';
import SelectFieldsCountries from '@/components/SelectFieldsCountries';
import SearchCountries from '@/components/search/SearchCountries';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import SelectedCountries from '@/components/selectedData/SelectedCountries';

const CountryVisualizer = () => {
    const { isMobileDrawerOpen } = useSelector(
        (s: RootState) => s.functionSlice
    );
    const { currentChart } = useSelector((s: RootState) => s.visualSlice);
    return (
        <div className="md:max-w-[1200px] py-20 mx-auto md:flex">
            <section className="w-[250px] space-y-4 px-2 hidden md:block">
                <ChartTypeListSideBar />
                <SearchCountries />
            </section>
            {isMobileDrawerOpen && <ChartTypeMobile />}

            <section className="w-full md:w-[950px] space-y-5 p-2">
                <SelectedCountries />
                <SelectFieldsCountries />
                {currentChart === 'tree' && <ChartColor />}

                <Chart mainCategory="country" />
            </section>
        </div>
    );
};

export default CountryVisualizer;
