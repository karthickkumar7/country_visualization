import {
    CountryNavItem,
    MainCategoriesString,
    StateNavItem,
} from '@/types/types';
import Item from './Item';

type Props = {
    mainCategory: MainCategoriesString;
    navItems: StateNavItem[] | CountryNavItem[];
};

const NavItems = ({ mainCategory, navItems }: Props) => {
    return (
        <ul className="flex items-center space-x-2 md:space-x-4 text-base md:text-lg font-semibold">
            {navItems.map((item) => (
                <Item
                    key={item.title}
                    item={item}
                    mainCategory={mainCategory}
                />
            ))}
        </ul>
    );
};

export default NavItems;
