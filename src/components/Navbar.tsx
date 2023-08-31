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
                        className="flex items-center text-lg font-semibold space-x-4"
                        onClick={() => store.dispatch(setMobileDrawer())}
                    >
                        <p>expand</p>
                        {isMobileDrawerOpen ? (
                            <GoChevronUp className="text-xl" />
                        ) : (
                            <GoChevronDown className="text-xl" />
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
