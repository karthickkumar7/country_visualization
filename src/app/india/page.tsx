import Header from '@/components/Header';
import IndiaTable from '@/components/india/IndiaTable';
import SelectedStates from '@/components/selectedData/SelectedStates';

const India = () => {
    return (
        <div className="w-full h-full py-14 md:py-12 bg-slate-200">
            <div className="max-w-[1200px] h-full md:p-2 mx-auto bg-white">
                <Header />
                <SelectedStates />
                <IndiaTable />
            </div>
        </div>
    );
};

export default India;
