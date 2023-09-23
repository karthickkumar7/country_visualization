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
            <section className="w-[250px] space-y-4 px-2 my-0 py-0 hidden md:block">
                <ChartTypeListSideBar />
                <SearchCountries />
            </section>
            {isMobileDrawerOpen && <ChartTypeMobile />}

            <section className="w-full md:w-[950px] md:px-4 space-y-5">
                <div className="bg-gradient-to-b bg-blue-100 rounded">
                    <SelectedCountries />
                    <SelectFieldsCountries />
                </div>
                {currentChart === 'tree' && <ChartColor />}

                <Chart mainCategory="country" />
            </section>
        </div>
    );
};

export default CountryVisualizer;
