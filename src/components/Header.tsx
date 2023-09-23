import HeaderChoice from './HeaderChoice';
import NavItems from './dropdowns/NavItems';
import {
    CountryNavItem,
    MainCategoriesString,
    StateNavItem,
} from '@/types/types';

type Props = {
    mainCategory: MainCategoriesString;
    navItems: StateNavItem[] | CountryNavItem[];
};

const Header = ({ mainCategory, navItems }: Props) => {
    return (
        <header className="w-full px-2 md:px-0 py-6 flex items-center justify-between">
            <HeaderChoice />
            <NavItems mainCategory={mainCategory} navItems={navItems} />
        </header>
    );
};

export default Header;
