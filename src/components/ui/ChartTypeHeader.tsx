'use client';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ChartTypeHeader = () => {
    const { type } = useSelector((s: RootState) => s.charts);
    return (
        <h2 className="text-3xl font-semibold capitalize text-slate-600">
            {type}
        </h2>
    );
};

export default ChartTypeHeader;
