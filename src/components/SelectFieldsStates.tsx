'use client';
import store, { RootState } from '@/redux/store';
import { setCurrentStateField } from '@/redux/visualSlice';
import { SelectFieldsStates } from '@/types/types';
import { useSelector } from 'react-redux';

const selectFields: SelectFieldsStates[] = [
    {
        title: 'Population',
        sub: 'population',
    },
    {
        title: 'Area',
        sub: 'area',
    },
    {
        title: 'Gdp',
        sub: 'gdp',
    },
    {
        title: 'Gdp per capita',
        sub: 'gdp_pc',
    },
];

const SelectFieldsStates = () => {
    const { currentStateField } = useSelector((s: RootState) => s.visualSlice);

    return (
        <div className="w-full p-2 flex justify-center mt-4 text-xs md:text-base rounded bg-slate-800">
            {selectFields.map((s) => (
                <div
                    key={s.title}
                    className={`p-2 md:px-4 md:py-2 rounded mr-5 cursor-pointer active:bg-blue-200 active:shadow ${
                        currentStateField === s.sub
                            ? 'bg-blue-600 text-white shadow'
                            : 'bg-slate-100 hover:bg-blue-100'
                    }`}
                    onClick={() => store.dispatch(setCurrentStateField(s.sub))}
                >
                    <p>{s.title}</p>
                </div>
            ))}
        </div>
    );
};

export default SelectFieldsStates;
