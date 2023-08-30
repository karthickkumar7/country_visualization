const Navbar = () => {
    return (
        <nav className="max-w-[1200px] mx-auto px-1 md:px-0">
            <div className="w-full h-[60px]">
                <ul className="w-full h-full flex items-center justify-between">
                    <li>
                        <div className="text-2xl font-bold uppercase">logo</div>
                    </li>
                    <li className="flex items-center text-lg font-semibold space-x-4">
                        <p>side 1</p>
                        <p>side 2</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
