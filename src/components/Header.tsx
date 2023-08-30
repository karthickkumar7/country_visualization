import { GoSearch, GoChevronDown } from 'react-icons/go';
import NavItems from './dropdowns/NavItems';

const Header = () => {
    return (
        <header className="w-full h-[60px] flex items-center justify-between">
            <section className="w-[300px] flex items-center ring-1 rounded overflow-hidden">
                <input
                    type="text"
                    placeholder="Search country..."
                    className="w-[90%] h-full px-2 py-1 outline-none"
                />
                <GoSearch className="w-[10%] h-full p-1 text-lg cursor-pointer hover:bg-blue-100 active:bg-blue-200" />
            </section>
            <NavItems />
        </header>
    );
};

export default Header;
