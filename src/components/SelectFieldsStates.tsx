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
        <div className="w-full px-2 py-3 md:py-4 flex justify-center mt-4 text-xs md:text-base shadow-lg rounded">
            {selectFields.map((s) => (
                <div
                    key={s.title}
                    className={`p-2 md:px-4 md:py-2 mr-5 cursor-pointer rounded active:bg-blue-500 active:shadow duration-300 ${
                        currentStateField === s.sub
                            ? 'ring ring-blue-200 text-white font-semibold tracking-wide shadow-lg'
                            : 'hover:bg-slate-600 text-slate-400'
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
