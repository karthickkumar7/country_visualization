'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { inSelected, parseArea } from '@/utils/countries';
import { useSelector, useDispatch } from 'react-redux';
import { addToSelectedCountry } from '@/redux/countrySlice';
import { Country } from '@/types/types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const CountryTable = () => {
    const { countries, selectedCountries } = useSelector(
        (s: RootState) => s.countrySlice
    );
    const dispatch = useDispatch<AppDispatch>();

    const selectCountry = (country: Country) => {
        dispatch(addToSelectedCountry(country));
    };

    const tableHeaderStyle =
        'font-semibold uppercase text-white cursor-default';

    return (
        <Table className="">
            <TableHeader className="">
                <TableRow className="bg-slate-500 hover:bg-blue-600 border border-slate-600">
                    <TableHead className={`${tableHeaderStyle}`}>no</TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        name
                    </TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        gpd (nom) (bil)
                    </TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        gdp (ppp) (bil)
                    </TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        area (km<sup>2</sup>)
                    </TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        population (mil)
                    </TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="w-full">
                {countries.map((country, i) => (
                    <TableRow
                        key={country.name}
                        className={`cursor-pointer text-slate-200 border-none ${
                            inSelected(country, selectedCountries)
                                ? 'bg-slate-700 font-semibold'
                                : 'hover:bg-slate-700'
                        }`}
                        onClick={() => selectCountry(country)}
                    >
                        <TableCell className="">{i + 1}</TableCell>
                        <TableCell className="">{country.name}</TableCell>
                        <TableCell className="">
                            {parseArea(country.gdp_nominal)}
                        </TableCell>
                        <TableCell className="">
                            {parseArea(country.gdp_ppp)}
                        </TableCell>
                        <TableCell className="">
                            {parseArea(country.area)}
                        </TableCell>
                        <TableCell className="">
                            {(country.population / 1e6).toFixed(2)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default CountryTable;
