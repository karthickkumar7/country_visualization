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
        <li className="flex flex-col md:flex-row">
            <section className="w-full md:w-[40%] p-2">
                <div className="overflow-hidden">
                    <Image
                        src={data.image}
                        width={500}
                        height={400}
                        alt="countries"
                        className="hover:brightness-75 duration-500 cursor-pointer hover:scale-110 md:object-cover bg-red-300"
                        onClick={routeHandler}
                    />
                </div>
            </section>
            <section className="w-full md:w-[60%] p-2">
                <h4
                    className="inline-flex text-2xl capitalize font-semibold hover:text-blue-400 cursor-pointer duration-300"
                    onClick={routeHandler}
                >
                    {data.title}
                </h4>
                <p className="group-hover:text-2xl duration-200 text-slate-500">
                    {getLength()} data available
                </p>
                <p className="mt-4 text-sm md:text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur consequuntur dolorem dolores quisquam debitis
                    eveniet dicta ipsum distinctio repellat ea.
                </p>
            </section>
        </li>
    );
};

export default DataCategoryCard;

// const version1 = () => (
//     <li
//         className="group w-full h-[200px] md:h-[400px] flex relative bg-black hover:shadow-md rounded overflow-hidden"
//         onClick={() => router.push(data.url)}
//     >
//         <Image
//             src={data.image}
//             width={600}
//             height={500}
//             alt="countries"
//             className="w-full object-cover opacity-40 cursor-pointer hover:opacity-60 hover:scale-125 duration-300"
//         />
//         <div className="absolute p-4 duration-200 space-y-2 text-white">
//             <h4 className="text-2xl group-hover:text-4xl font-semibold duration-300">
//                 {data.title}
//             </h4>
//             <p className="text-xl group-hover:text-2xl duration-200">
//                 {getLength()} data available
//             </p>
//         </div>
//     </li>
// );
