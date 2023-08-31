import { countries } from '@/data/countries';
import CountryGridCard from '../CountryGridCard';

const CountryGrid = () => {
    return (
        <div className="w-full p-2 md:p-0 grid grid-cols-1 md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0">
            {countries.map((country) => (
                <CountryGridCard key={country.name} country={country} />
            ))}
        </div>
    );
};

export default CountryGrid;
