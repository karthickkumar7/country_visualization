import DataCategoryCard from '@/components/DataCategoryCard';
import { DataCategory } from '@/types/types';

const data: DataCategory[] = [
    {
        id: 1,
        title: 'countries',
        image: '/images/countries.jpg',
        desc: 'A country is a distinct part of the world, such as a state, nation, or other political entity. It may be a sovereign state or make up one part of a larger state. The largest country by area is Russia, while the smallest is the microstate Vatican City. The most populous is India, while Vatican City is also the least populous.',
        url: '/country',
    },
    {
        id: 2,
        title: 'india',
        image: '/images/india.jpg',
        desc: 'India, officially the Republic of India is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023. India is a federal union comprising 28 states and 8 union territories, with a total of 36 entities. The states and union territories are further subdivided into districts and smaller administrative divisions.',
        url: '/india',
    },
];

export default function Home() {
    return (
        <div className="w-full min-h-screen flex justify-center bg-slate-900">
            <div className="max-w-[1200px] h-full mx-auto">
                <div className="md:w-[1200px] h-[50px]"></div>
                <ul className="w-full p-2 overflow-hidden space-y-4">
                    {data.map((dt) => (
                        <DataCategoryCard key={dt.id} data={dt} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
