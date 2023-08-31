import { GoSearch } from 'react-icons/go';
import NavItems from './dropdowns/NavItems';
import VisualizeAddCountries from './VisualizeAddCountries';

const Header = () => {
    return (
        <header className="w-full px-2 md:px-0 h-[60px] flex items-center justify-between">
            <section className="flex items-center">
                <VisualizeAddCountries />
            </section>
            <NavItems />
        </header>
    );
};

export default Header;
