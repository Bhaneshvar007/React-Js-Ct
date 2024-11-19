import React, { useContext, useState } from 'react';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import { TbShoppingBag } from 'react-icons/tb';
import { CgSearch } from 'react-icons/cg';
import { BiSolidOffer } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { BsCart2 } from 'react-icons/bs';
import SideMenu from './SideMenu';
import SideLoginPage from './SideLoginPage';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Search from './Search';
import Context from '../Context';

const Header = () => {
    const [togle, setTogle] = useState(false);
    const [loginTogle, setloginTogle] = useState(false);
    const [cart, setCart] = useState(false);
    const [switchs, setSwitchs] = useState(true);
    const [referal, SetReferal] = useState(true);
    const [search, setSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle


    let { buyCart } = useContext(Context);


    return (
        <>
            {/* Side Components */}
            <SideMenu togle={togle} setTogle={setTogle} />
            <SideLoginPage
                loginTogle={loginTogle}
                setloginTogle={setloginTogle}
                switchs={switchs}
                setSwitchs={setSwitchs}
                referal={referal}
                SetReferal={SetReferal}
            />
            <Cart cart={cart} setCart={setCart} />
            <Search search={search} setSearch={setSearch} />

            {/* Header */}
            <div className="lg:w-full shadow-lg fixed z-10 bg-white top-0">
                <div className="lg:w-[1250px] w-[440px]  lg:mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/">

                            <img
                                className="w-[80px]"
                                src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"
                                alt="Logo"
                            />
                        </Link>
                        <div
                            className="hidden md:flex items-center gap-2 cursor-pointer duration-500 hover:text-[#ff5200]"
                            onClick={() => setTogle(true)}
                        >
                            <p className="border-b-2 border-black hover:border-[#ff5200] font-semibold">Other</p>
                            <FaChevronDown className="text-[#ff5200] inline" />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        <div className="text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer">
                            <TbShoppingBag className="text-xl" />
                            <Link to="/corporate">
                                <p>Swiggy Corporate</p>
                            </Link>
                        </div>
                        <div
                            className="text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer"
                            onClick={() => setSearch(true)}
                        >
                            <CgSearch className="text-xl" />
                            <p>Search</p>
                        </div>
                        <Link
                            to="/offer"
                            className="text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer"
                        >
                            <BiSolidOffer className="text-xl" />
                            <p>Offers</p>
                            <sup className="text-[#ff5200]">New</sup>
                        </Link>
                        <div className="text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer">
                            <Link to="/help">
                                <p>Help</p>
                            </Link>
                        </div>
                        <div
                            className="text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer"
                            onClick={() => setloginTogle(true)}
                        >
                            <CiUser className="text-xl" />
                            <p>Sign In</p>
                        </div>
                        <div
                            className="text-[#3D4152] hover:text-[#ff5200] font-semibold flex items-center gap-2 duration-500 cursor-pointer"
                            onClick={() => setCart(true)}
                        >
                            <BsCart2 className="text-xl" />
                            <p>Cart</p>
                            <sup className="text-[#ff5200]">{buyCart.length}</sup>
                        </div>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden z-50">
                        <FaBars
                            className="text-xl text-[#3D4152] cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="bg-white shadow-md md:hidden">
                        <nav className="flex flex-col gap-4 p-4">
                            <Link to="/corporate" className="text-[#3D4152] hover:text-[#ff5200] font-semibold">
                                Swiggy Corporate
                            </Link>
                            <div
                                className="text-[#3D4152] hover:text-[#ff5200] font-semibold cursor-pointer"
                                onClick={() => setSearch(true)}
                            >
                                Search
                            </div>
                            <Link to="/offer" className="text-[#3D4152] hover:text-[#ff5200] font-semibold">
                                Offers <sup className="text-[#ff5200]">New</sup>
                            </Link>
                            <Link to="/help" className="text-[#3D4152] hover:text-[#ff5200] font-semibold">
                                Help
                            </Link>
                            <div
                                className="text-[#3D4152] hover:text-[#ff5200] font-semibold cursor-pointer"
                                onClick={() => setloginTogle(true)}
                            >
                                Sign In
                            </div>
                            <div
                                className="text-[#3D4152] hover:text-[#ff5200] font-semibold cursor-pointer"
                                onClick={() => setCart(true)}
                            >
                                Cart <sup className="text-[#ff5200]">0</sup>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
