'use client';
import { useSelector } from 'react-redux';
import CountryTable from './countries/CountryTable';
import CountryGrid from './countries/CountryGrid';
import { RootState } from '@/redux/store';

const ViewData = () => {
    const { currentView } = useSelector((s: RootState) => s.functionSlice);

    const renderView = () => {
        switch (currentView) {
            case 'grid':
                return <CountryGrid />;
            case 'table':
                return <CountryTable />;
            default:
                return <CountryTable />;
        }
    };

    return (
        <section className="w-full my-4 space-y-4 bg-slate-800 text-slate-200">
            {renderView()}
        </section>
    );
};

export default ViewData;
