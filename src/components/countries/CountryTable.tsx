'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { inSelectedCountries, parseArea } from '@/utils/countries';
import { useSelector, useDispatch } from 'react-redux';
import { addToSelectedCountry } from '@/redux/countrySlice';
import { Country } from '@/types/types';

const CountryTable = () => {
    const { countries, selectedCountries } = useSelector(
        (s: RootState) => s.countrySlice
    );
    const dispatch = useDispatch<AppDispatch>();

    const selectCountry = (country: Country) => {
        dispatch(addToSelectedCountry(country));
    };

    return (
        <table className="w-full">
            <thead className="w-full">
                <tr className="w-full px-1 flex justify-between capitalize text-sm md:text-xl rounded-t duration-300 bg-blue-600 text-white">
                    <th className="w-[5%] h-full py-4 px-1 hidden md:inline-flex">
                        no
                    </th>
                    <th className="w-[20%] h-full py-4">name</th>
                    <th className="w-[20%] h-full py-4">gpd (nom) (bil)</th>
                    <th className="w-[15%] h-full py-4">gdp (ppp) (bil)</th>
                    <th className="w-[20%] h-full py-4">
                        area (km<sup>2</sup>)
                    </th>
                    <th className="w-[20%] h-full py-4">population (mil)</th>
                </tr>
            </thead>

            <tbody className="w-full">
                {countries.map((country, i) => (
                    <tr
                        key={country.name}
                        className={`w-full px-1 py-3 md:py-2 flex justify-between text-xs md:text-lg font-semibold cursor-pointer border ${
                            inSelectedCountries(country, selectedCountries)
                                ? 'bg-blue-100'
                                : 'hover:bg-slate-100'
                        }`}
                        onClick={() => selectCountry(country)}
                    >
                        <td className="w-[5%] hidden md:inline-flex">
                            {i + 1}
                        </td>
                        <td className="w-[20%] px-2 capitalize">
                            {country.name}
                        </td>
                        <td className="w-[20%] px-2 capitalize">
                            {parseArea(country.gdp_nominal)}
                        </td>
                        <td className="w-[15%] px-2 md:px-4">
                            {parseArea(country.gdp_ppp)}
                        </td>
                        <td className="w-[20%] px-2">
                            {parseArea(country.area)}
                        </td>
                        <td className="w-[20%] px-4">
                            {(country.population / 1e6).toFixed(2)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CountryTable;
