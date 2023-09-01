import HeaderChoice from './HeaderChoice';
import NavItems from './dropdowns/NavItems';
import SearchCountries from './search/SearchCountries';

const Header = () => {
    return (
        <header className="w-full px-2 md:px-0 h-[60px] flex items-center justify-between">
            <HeaderChoice />
            <NavItems />
        </header>
    );
};

export default Header;
