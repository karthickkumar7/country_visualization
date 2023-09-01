'use client';
import SearchCountries from './search/SearchCountries';
import SearchIndia from './search/SearchIndia';
import { usePathname } from 'next/navigation';

const HeaderChoice = () => {
    const pathname = usePathname();

    const renderSearchInput = () => {
        switch (pathname) {
            case '/country':
                return <SearchCountries />;

            case '/india':
                return <SearchIndia />;
            default:
                return null;
        }
    };

    return (
        <section className="flex items-center">{renderSearchInput()}</section>
    );
};

export default HeaderChoice;
