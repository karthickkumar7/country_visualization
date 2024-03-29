import Header from '@/components/Header';
import IndiaTable from '@/components/india/IndiaTable';
import SelectedStates from '@/components/selectedData/SelectedStates';
import { StateNavItem } from '@/types/types';

const navItems: StateNavItem[] = [
    {
        title: 'sort',
        subMenu: [
            { title: 'Population' },
            { title: 'Area' },
            { title: 'Gdp' },
            { title: 'Gdp per capita' },
        ],
    },
];

const India = () => {
    return (
        <div className="w-full h-full bg-slate-900">
            <div className="max-w-[1200px] h-full md:p-2 mx-auto bg-slate-900">
                <Header mainCategory="india" navItems={navItems} />
                <SelectedStates />
                <IndiaTable />
            </div>
        </div>
    );
};

export default India;
