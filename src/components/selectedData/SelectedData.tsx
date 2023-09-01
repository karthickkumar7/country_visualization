import store from '@/redux/store';
import { removeFromSelectedCountry } from '@/redux/countrySlice';
import { RxCross2 } from 'react-icons/rx';
import { MainCategoriesString } from '@/types/types';
import { removeFromSelectedState } from '@/redux/indiaSlice';

type Props = {
    name: string;
    fullname: string | undefined;
    mainCategory: MainCategoriesString;
};

const SelectedCountry = ({ name, fullname, mainCategory }: Props) => {
    const removeHandler = (name: string) => {
        switch (mainCategory) {
            case 'country':
                store.dispatch(removeFromSelectedCountry(name));
                return;
            case 'india':
                store.dispatch(removeFromSelectedState(name));
                return;

            default:
                return;
        }
    };

    return (
        <div className="px-2 py-1 m-1 flex items-center space-x-2 rounded shadow bg-blue-500 text-white">
            <p className="capitalize">{fullname ? fullname : name}</p>
            <RxCross2
                className="cursor-pointer hover:opacity-80 active:opacity-100"
                onClick={() => removeHandler(name)}
            />
        </div>
    );
};

export default SelectedCountry;
