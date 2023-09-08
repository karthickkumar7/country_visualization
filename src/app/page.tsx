import DataCategoryCard from '@/components/DataCategoryCard';
import { DataCategory } from '@/types/types';

const data: DataCategory[] = [
    {
        id: 1,
        title: 'countries',
        image: '/images/countries.jpg',
        url: '/country',
    },
    {
        id: 2,
        title: 'india',
        image: '/images/india.jpg',
        url: '/india',
    },
];

export default function Home() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-bgGray">
            <div className="max-w-[1200px] h-full mx-auto bg-white">
                <div className="md:w-[1200px] h-[100px]"></div>
                <ul className="w-full p-4 space-y-4">
                    {data.map((dt) => (
                        <DataCategoryCard key={dt.id} data={dt} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
