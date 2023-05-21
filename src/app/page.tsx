import Table from '@/components/client/Table';
import Search from '@/components/client/Search';
import SelectedCountriesContainer from '@/components/client/SelectedCountriesContainer';

export default function Home() {
    return (
        <main className="w-full h-screen overflow-y-auto">
            {/* main */}
            <main className="w-full h-[calc(100vh-50px)]">
                <div className="max-w-[1200px] h-full mx-auto">
                    <div className="py-4">
                        <Search />
                    </div>
                    <SelectedCountriesContainer />
                    <Table />
                </div>
            </main>
        </main>
    );
}
