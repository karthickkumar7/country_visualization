'use client';
import store, { RootState } from '@/redux/store';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { setMobileDrawer } from '@/redux/functionSlice';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sedgwick_Ave_Display } from 'next/font/google';

const sedgwikAveDisply = Sedgwick_Ave_Display({
    subsets: ['latin'],
    weight: ['400'],
});

const Navbar = () => {
    const { isMobileDrawerOpen } = useSelector(
        (s: RootState) => s.functionSlice
    );
    const pathname = usePathname();

    return (
        <nav className="w-full bg-slate-800">
            <div className="md:max-w-[1200px] mx-auto px-4 md:px-2 text-white">
                <div className="w-full h-[60px]">
                    <ul className="w-full h-full flex items-center justify-between">
                        <li>
                            <div
                                className={`text-2xl md:ml-4 font-bold uppercase ${sedgwikAveDisply.className}`}
                            >
                                <Link href={'/'}>Charts</Link>
                            </div>
                        </li>
                        {pathname.split('/').length > 2 && (
                            <li
                                className="px-2 py-1 items-center text-lg font-semibold space-x-1 flex rounded md:hidden"
                                onClick={() =>
                                    store.dispatch(setMobileDrawer())
                                }
                            >
                                {isMobileDrawerOpen ? (
                                    <>
                                        <p>collapse</p>
                                        <GoChevronUp className="text-xl" />
                                    </>
                                ) : (
                                    <>
                                        <p>show chart</p>
                                        <GoChevronDown className="text-xl" />
                                    </>
                                )}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
