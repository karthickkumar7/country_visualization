'use client';
import { addToSelectedStates } from '@/redux/indiaSlice';
import store, { RootState } from '@/redux/store';
import { India } from '@/types/types';
import { inSelected, parseArea } from '@/utils/countries';
import { useSelector } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const IndiaTable = () => {
    const { india, selectedStates } = useSelector(
        (s: RootState) => s.indiaSlice
    );

    const selectState = (state: India) => {
        store.dispatch(addToSelectedStates(state));
    };

    const tableHeaderStyle =
        'font-semibold uppercase cursor-default text-white';

    return (
        <Table className="mt-[13px]">
            <TableHeader className="">
                <TableRow className="lg:w-[1200px] bg-black hover:bg-black">
                    <TableHead className={`${tableHeaderStyle}`}>no</TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        name
                    </TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        abbr
                    </TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        gpd (bil)
                    </TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        gpd pc (bil)
                    </TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        area (km<sup>2</sup>)
                    </TableHead>
                    <TableHead className={`${tableHeaderStyle}`}>
                        population (mil)
                    </TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="">
                {india.map((state, i) => (
                    <TableRow
                        key={state.name}
                        className={`cursor-pointer ${
                            inSelected(state, selectedStates)
                                ? 'bg-blue-100 font-semibold hover:bg-blue-100'
                                : 'hover:bg-slate-100'
                        }`}
                        onClick={() => selectState(state)}
                    >
                        <TableCell className="">{i + 1}</TableCell>
                        <TableCell className="">{state.fullname}</TableCell>
                        <TableCell className="">{state.name}</TableCell>
                        <TableCell className="">
                            {parseArea(state.gdp)}
                        </TableCell>
                        <TableCell className="">
                            {parseArea(state.gdp_pc)}
                        </TableCell>
                        <TableCell className="">
                            {parseArea(state.area)}
                        </TableCell>
                        <TableCell className="">
                            {(state.population / 1e6).toFixed(2)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default IndiaTable;
