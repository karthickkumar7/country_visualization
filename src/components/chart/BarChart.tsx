'use client';
import { BarChartLayout } from '@/types/types';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const layouts: BarChartLayout[] = [
    {
        title: 'Horizontal',
        sub: 'h',
    },
    {
        title: 'Vertical',
        sub: 'v',
    },
];

const BarChart = () => {
    const [layout, setLayout] = useState<'h' | 'v'>('h');
    const BarchartH = dynamic(() => import('@/components/chart/BarchartH'), {
        ssr: false,
    });
    const BarchartV = dynamic(() => import('@/components/chart/BarchartV'), {
        ssr: false,
    });
    return (
        <div className="w-full p-2 border rounded">
            <div className="flex items-center justify-center my-4">
                {layouts.map((l) => (
                    <div
                        key={l.sub}
                        className={`px-4 py-2 rounded mr-5 cursor-pointer active:bg-blue-200 active:shadow ${
                            l.sub === layout
                                ? 'bg-blue-600 text-white shadow'
                                : 'bg-slate-100 hover:bg-blue-100'
                        }`}
                        onClick={() => setLayout(l.sub)}
                    >
                        <p>{l.title}</p>
                    </div>
                ))}
            </div>
            {layout === 'h' && <BarchartH />}
            {layout === 'v' && <BarchartV />}
        </div>
    );
};

export default BarChart;