import React, { ReactNode } from 'react';
import SearchCountriesViz from '@/components/client/SearchCountriesViz';
import SelectedCountriesViz from '@/components/client/SelectedCountriesViz';
import ChartTypeHeader from '@/components/ui/ChartTypeHeader';
import SelectPropCountries from '@/components/client/SelectPropCountries';
import ChartNav from '@/components/client/ChartNav';

const layout = ({ children }: { children: ReactNode }) => {
    // return <div>{children}</div>;
    return (
        <main className="max-w-[1200px] h-[calc(100vh-50px)] mx-auto flex">
            <section className="w-[300px] p-4 space-y-4">
                <ChartNav />
                <SelectedCountriesViz />
                <SearchCountriesViz />
            </section>
            <section className="w-[900px]">
                <ChartTypeHeader />
                <SelectPropCountries />
                {children}
            </section>
        </main>
    );
};

export default layout;
