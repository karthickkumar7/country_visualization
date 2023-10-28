import Header from '@/components/Header';
import CountryTable from '@/components/countries/CountryTable';
import SelectedCountries from '@/components/selectedData/SelectedCountries';
import { CountryNavItem } from '@/types/types';

const navItems: CountryNavItem[] = [
    {
        title: 'sort',
        subMenu: [
            { title: 'Population' },
            { title: 'Area' },
            { title: 'Gdp (nom)' },
            { title: 'Gdp (ppp)' },
        ],
    },
];

const page = () => {
    return (
        <div className="w-full h-full py-2 bg-slate-900">
            <div className="max-w-[1200px] h-full md:p-2 mx-auto">
                <Header mainCategory="country" navItems={navItems} />
                <SelectedCountries />
                <CountryTable />
            </div>
        </div>
    );
};

export default page;
