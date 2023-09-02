'use client';
import { RootState } from '@/redux/store';
import { DataCategory } from '@/types/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

type Props = {
    data: DataCategory;
};

const DataCategoryCard = ({ data }: Props) => {
    const { countries } = useSelector((s: RootState) => s.countrySlice);
    const { india } = useSelector((s: RootState) => s.indiaSlice);
    const router = useRouter();

    const getLength = () => {
        switch (data.title) {
            case 'countries':
                return countries.length;
            case 'india':
                return india.length;
            default:
                return 0;
        }
    };

    return (
        <li
            className="group w-full h-[200px] md:h-[400px] flex relative bg-black hover:shadow-md rounded overflow-hidden"
            onClick={() => router.push(data.url)}
        >
            <Image
                src={data.image}
                width={600}
                height={500}
                alt="countries"
                className="w-full object-cover opacity-40 cursor-pointer hover:opacity-60 hover:scale-125 duration-300"
            />
            <div className="absolute p-4 duration-200 space-y-2 text-white">
                <h4 className="text-2xl group-hover:text-4xl font-semibold duration-300">
                    {data.title}
                </h4>
                <p className="text-xl group-hover:text-2xl duration-200">
                    {getLength()} data available
                </p>
            </div>
        </li>
    );
};

export default DataCategoryCard;
