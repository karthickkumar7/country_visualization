import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const loading = () => {
    return (
        <div className="max-w-[1200px] h-screen mx-auto flex items-center justify-center">
            <AiOutlineLoading3Quarters className="text-4xl animate-spin" />
        </div>
    );
};

export default loading;
