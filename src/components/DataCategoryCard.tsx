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

    const routeHandler = () => router.push(data.url);

    return (
        <li className="flex flex-col md:flex-row rounded-lg shadow-lg">
            <section className="w-full md:w-[40%]">
                <div className="overflow-hidden">
                    <Image
                        src={data.image}
                        width={500}
                        height={400}
                        alt="countries"
                        className="hover:brightness-75 duration-500 cursor-pointer hover:scale-110 md:object-cover rounded-lg"
                        onClick={routeHandler}
                    />
                </div>
            </section>
            <section className="w-full md:w-[60%] p-4 bg-slate-700">
                <h4
                    className="inline-flex text-2xl capitalize font-semibold text-slate-200 hover:text-blue-400 cursor-pointer duration-300"
                    onClick={routeHandler}
                >
                    {data.title}
                </h4>
                <p className="group-hover:text-2xl duration-200 text-slate-300">
                    {getLength()} data available
                </p>
                <p className="mt-4 text-sm text-slate-200 md:text-base">
                    {data.desc}
                </p>
            </section>
        </li>
    );
};

export default DataCategoryCard;
