'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

type Props = {
    params: {
        countryName: string;
    };
};

const Country = ({ params: { countryName } }: Props) => {
    const {} = useSelector((s: RootState) => s.countrySlice);

    return <div> {countryName}</div>;
};

export default Country;
