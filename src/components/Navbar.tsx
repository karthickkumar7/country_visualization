'use client';
import store, { RootState } from '@/redux/store';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { setMobileDrawer } from '@/redux/functionSlice';
import Link from 'next/link';

const Navbar = () => {
    const { isMobileDrawerOpen } = useSelector(
        (s: RootState) => s.functionSlice
    );
    return (
        <nav className="w-full px-2 md:px-0 fixed top-0 z-20 bg-blue-600 text-white">
            <div className="md:max-w-[1200px] mx-auto px-1 md:px-0">
                <div className="w-full h-[60px]">
                    <ul className="w-full h-full flex items-center justify-between">
                        <li>
                            <div className="text-2xl font-bold uppercase">
                                <Link href={'/'}>Karthii</Link>
                            </div>
                        </li>
                        <li
                            className="px-2 py-1 items-center text-lg font-semibold space-x-1 flex rounded md:hidden"
                            onClick={() => store.dispatch(setMobileDrawer())}
                        >
                            {isMobileDrawerOpen ? (
                                <>
                                    <p>collapse</p>
                                    <GoChevronUp className="text-xl" />
                                </>
                            ) : (
                                <>
                                    <p>expand</p>
                                    <GoChevronDown className="text-xl" />
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
