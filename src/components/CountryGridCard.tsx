'use client';
import store, { RootState } from '@/redux/store';
import { Country } from '@/types/types';
import {
    inSelectedCountries,
    parseArea,
    renderMultipleStrings,
} from '@/utils/countries';
import { addToSelectedCountry } from '@/redux/countrySlice';
import { useSelector } from 'react-redux';

type Props = {
    country: Country;
};

const CountryGridCard = ({ country }: Props) => {
    const { selectedCountries } = useSelector((s: RootState) => s.countrySlice);

    return (
        <div
            key={country.name}
            className={`cursor-pointer rounded overflow-hidden shadow active:shadow-lg  ${
                inSelectedCountries(country, selectedCountries)
                    ? 'bg-blue-200'
                    : 'bg-slate-100'
            }`}
            onClick={() => store.dispatch(addToSelectedCountry(country))}
        >
            <section
                className={`p-2 ${
                    inSelectedCountries(country, selectedCountries)
                        ? 'bg-gradient-to-r from-blue-500 to-white text-white'
                        : 'bg-gradient-to-r from-slate-300 to-white'
                }`}
            >
                <h4 className="capitalize cursor-pointer text-lg font-bold">
                    {country.fullname ? country.fullname : country.name}
                </h4>
            </section>
            <section className="p-2 flex justify-between text-sm">
                <div className="text-slate-600">
                    <p className="capitalize font-semibold">
                        {renderMultipleStrings(country.capital)}
                    </p>
                    <p className="text-slate-400 capitalize font-semibold">
                        {renderMultipleStrings(country.continent)}
                    </p>
                </div>
                <div>
                    <p>{parseArea(country.gdp_nominal)} bil</p>
                    <p>{parseArea(country.gdp_ppp)} bil</p>
                </div>
                <div>
                    {/* <p>{(country.area / 1e6).toFixed(2)}</p> */}
                    <p>
                        {parseArea(country.area)} km
                        <sup>2</sup>
                    </p>
                    <p>
                        {(country.population / 1e6).toFixed(2)}
                        {' mil'}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CountryGridCard;
