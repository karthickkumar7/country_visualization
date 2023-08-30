import store from '@/redux/store';
import { removeFromSelectedCountry } from '@/redux/countrySlice';
import { RxCross2 } from 'react-icons/rx';

type Props = {
    name: string;
};

const SelectedCountry = ({ name }: Props) => {
    const removeHandler = (name: string) =>
        store.dispatch(removeFromSelectedCountry(name));

    return (
        <div className="px-2 py-1 m-1 flex items-center space-x-2 rounded shadow bg-blue-500 text-white">
            <p className="capitalize">{name}</p>
            <RxCross2
                className="cursor-pointer hover:opacity-80 active:opacity-100"
                onClick={() => removeHandler(name)}
            />
        </div>
    );
};

export default SelectedCountry;
