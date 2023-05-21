import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full h-[50px] sticky top-0 z-50 bg-white">
            <div className="max-w-[1200px] h-full mx-auto flex items-center justify-between">
                <div className="text-2xl font-semibold cursor-pointer">
                    <Link href={'/'}>LOGO</Link>
                </div>
                <ul className="flex items-center gap-4">
                    <li>countries</li>
                    <li>visualize</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
