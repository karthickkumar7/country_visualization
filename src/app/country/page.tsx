import Header from '@/components/Header';
import ViewData from '@/components/ViewData';
import SelectedCountries from '@/components/selectedData/SelectedCountries';

const page = () => {
    return (
        <div className="w-full h-full py-14 md:py-12 bg-slate-200">
            <div className="max-w-[1200px] h-full md:p-2 mx-auto bg-white">
                <Header />
                <SelectedCountries />
                <ViewData />
            </div>
        </div>
    );
};

export default page;
