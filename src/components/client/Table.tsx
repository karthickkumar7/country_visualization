'use client';
import { addSelectedCountry } from '@/redux/reducers/countriesSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';

const Table = () => {
    const { filteredCountries } = useSelector((s: RootState) => s.countries);
    const dispatch = useDispatch<AppDispatch>();

    const selectCountryHandler = (country: Country) => {
        dispatch(addSelectedCountry(country));
    };

    return (
        <table className="w-full">
            <thead className="border-b text-blue-600">
                <tr>
                    <th className="text-start w-[10%] py-4 text-xl">id</th>
                    <th className="text-start w-[20%] py-4 text-xl">name</th>
                    <th className="text-start w-[20%] py-4 text-xl">
                        Continent
                    </th>
                    <th className="text-start w-[20%] py-4 text-xl">
                        Population
                    </th>
                    <th className="text-start w-[15%] py-4 text-xl">
                        GDP (nom)
                    </th>
                    <th className="text-start w-[15%] py-4 text-xl">
                        GDP (ppp)
                    </th>
                </tr>
            </thead>
            <tbody className="">
                {filteredCountries.map((cou) => (
                    <tr
                        key={cou.id}
                        className="font-semibold even:bg-sky-50 hover:opacity-70"
                    >
                        <td className="py-2">{cou.id}</td>
                        <td
                            className="capitalize cursor-pointer hover:underline active:opacity-80"
                            onClick={() => selectCountryHandler(cou)}
                        >
                            {cou.name.length > 10 ? cou.sub : cou.name}
                        </td>
                        <td className="capitalize">{cou.continent}</td>
                        <td>{cou.population}</td>
                        <td>{cou.gdp_nom} billion</td>
                        <td>{cou.gdp_ppp} billion</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
