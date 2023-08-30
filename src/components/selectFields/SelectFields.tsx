import React from 'react';

const selectFields = [
    {
        title: 'Population',
    },
    {
        title: 'Area',
    },
    {
        title: 'Gdp nominal',
    },
    {
        title: 'Gdp ppp',
    },
];

const SelectFields = () => {
    return (
        <div className="w-full flex justify-center mt-4">
            {selectFields.map((s) => (
                <div
                    key={s.title}
                    className="px-4 py-2 rounded mr-5 cursor-pointer bg-slate-100 hover:bg-blue-100"
                >
                    <p>{s.title}</p>
                </div>
            ))}
        </div>
    );
};

export default SelectFields;
