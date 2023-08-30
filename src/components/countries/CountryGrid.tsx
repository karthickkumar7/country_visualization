import { countries } from '@/data/countries';
import CountryGridCard from '../CountryGridCard';

const CountryGrid = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {countries.map((country) => (
                <CountryGridCard key={country.name} country={country} />
            ))}
        </div>
    );
};

export default CountryGrid;
