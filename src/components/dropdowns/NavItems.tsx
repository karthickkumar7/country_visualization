import { NavItem } from '@/types/types';
import Item from './Item';

const navItems: NavItem[] = [
    {
        title: 'sort',
        subMenu: [
            { title: 'Name' },
            { title: 'Population' },
            { title: 'Area' },
            { title: 'Gdp (nom)' },
            { title: 'Gdp (ppp)' },
        ],
    },
    {
        title: 'view',
        subMenu: [{ title: 'table' }, { title: 'grid' }],
    },
];

const NavItems = () => {
    return (
        <ul className="flex items-center space-x-4 text-lg font-semibold">
            {navItems.map((item) => (
                <Item key={item.title} item={item} />
            ))}
        </ul>
    );
};

export default NavItems;
