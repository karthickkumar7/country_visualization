'use client';
import store, { RootState } from '@/redux/store';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { setMobileDrawer } from '@/redux/functionSlice';

const Navbar = () => {
    const { isMobileDrawerOpen } = useSelector(
        (s: RootState) => s.functionSlice
    );
    return (
        <nav className="w-full md:max-w-[1200px] mx-auto px-1 md:px-0">
            <div className="w-full h-[60px]">
                <ul className="w-full h-full flex items-center justify-between">
                    <li>
                        <div className="text-2xl font-bold uppercase">logo</div>
                    </li>
                    <li
                        className="px-2 py-1 items-center text-lg font-semibold space-x-4 flex rounded md:hidden hover:bg-slate-200"
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
        </nav>
    );
};

export default Navbar;
