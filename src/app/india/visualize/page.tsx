'use client';
import Chart from '@/components/chart/Chart';
import ChartColor from '@/components/ChartColor';
import ChartTypeListSideBar from '@/components/ChartTypeListSideBar';
import ChartTypeMobile from '@/components/ChartTypeMobile';
import SearchIndia from '@/components/search/SearchIndia';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import SelectedStates from '@/components/selectedData/SelectedStates';
import SelectFieldsStates from '@/components/SelectFieldsStates';

const StateVisualizer = () => {
    const { isMobileDrawerOpen } = useSelector(
        (s: RootState) => s.functionSlice
    );
    return (
        <div className="w-full min-h-[calc(100vh-60px)] bg-slate-900">
            <div className="md:max-w-[1200px] py-20 mx-auto md:flex bg-slate-900">
                <section className="w-[250px] space-y-4 px-2 hidden md:block">
                    <ChartTypeListSideBar />
                    <SearchIndia />
                </section>
                {isMobileDrawerOpen && <ChartTypeMobile />}

                <section className="w-full md:w-[950px] space-y-5 p-2">
                    <SelectedStates />
                    <SelectFieldsStates />
                    <ChartColor />
                    <Chart mainCategory="india" />
                </section>
            </div>
        </div>
    );
};

export default StateVisualizer;
