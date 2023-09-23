'use client';
import store, { RootState } from '@/redux/store';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { setMobileDrawer } from '@/redux/functionSlice';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const { isMobileDrawerOpen } = useSelector(
        (s: RootState) => s.functionSlice
    );
    const pathname = usePathname();

    return (
        <nav className="w-full fixed top-0 z-20">
            <div className="md:max-w-[1200px] mx-auto px-1 md:px-2 bg-blue-600 text-white">
                <div className="w-full h-[60px]">
                    <ul className="w-full h-full flex items-center justify-between">
                        <li>
                            <div className="text-2xl md:ml-4 font-bold uppercase">
                                <Link href={'/'}>Charts</Link>
                            </div>
                        </li>
                        {pathname !== '/' && (
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
