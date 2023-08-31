'use client';
import store, { RootState } from '@/redux/store';
import { setCurrentField } from '@/redux/visualSlice';
import { SelectFields } from '@/types/types';
import { useSelector } from 'react-redux';

const selectFields: SelectFields[] = [
    {
        title: 'Population',
        sub: 'population',
    },
    {
        title: 'Area',
        sub: 'area',
    },
    {
        title: 'Gdp nominal',
        sub: 'gdp_nominal',
    },
    {
        title: 'Gdp ppp',
        sub: 'gdp_ppp',
    },
];

const SelectFields = () => {
    const { currentField } = useSelector((s: RootState) => s.visualSlice);

    return (
        <div className="w-full p-2 flex justify-center mt-4 text-xs md:text-base border rounded">
            {selectFields.map((s) => (
                <div
                    key={s.title}
                    className={`p-2 md:px-4 md:py-2 rounded mr-5 cursor-pointer active:bg-blue-200 active:shadow ${
                        currentField === s.sub
                            ? 'bg-blue-600 text-white shadow'
                            : 'bg-slate-100 hover:bg-blue-100'
                    }`}
                    onClick={() => store.dispatch(setCurrentField(s.sub))}
                >
                    <p>{s.title}</p>
                </div>
            ))}
        </div>
    );
};

export default SelectFields;
