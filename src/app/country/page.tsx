import Header from '@/components/Header';
import SelectedCountries from '@/components/SelectedCountries';
import ViewData from '@/components/ViewData';

const page = () => {
    return (
        <div className="w-full h-full">
            <div className="max-w-[1200px] h-full mx-auto">
                <Header />
                <SelectedCountries />
                <ViewData />
            </div>
        </div>
    );
};

export default page;
