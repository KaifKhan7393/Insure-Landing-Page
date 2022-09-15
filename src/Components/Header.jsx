import React, { useState } from 'react';
import ButtonItem from './ButtonItem';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { HiMenuAlt2 } from 'react-icons/Hi';
import { TiTimes } from 'react-icons/Ti';

const Header = () => {
    const [menu, setMenu] = useState(true);
    const links = [
        {
            id: 1,
            menu: "How We Work",
            url: '/'
        },
        {
            id: 2,
            menu: "Blog",
            url: '/'
        }, {
            id: 3,
            menu: "Account",
            url: '/'
        }
    ];
    return (
        <>
            <header className="w-full h-[70px] flex justify-between items-center px-10 sm:px-20 drop-shadow-2xl relative z-20">
                <div className="logo cursor-pointer hover:scale-105 duration-300">
                    <img src={Logo} alt="logo-image" />
                </div>
                {/* For desktop screen */}
                <nav className="relative">
                    <ul className="hidden md:flex md:items-center">
                        {
                            links.map((item, index) => {
                                return (
                                    <li key={index} className="mr-4 uppercase text-gray-600 tracking-wide hover:scale-x-105 duration-300">
                                        <NavLink to={item.url}>{item.menu}</NavLink>
                                    </li>
                                )
                            })
                        }
                        <ButtonItem title="View Plans" />
                    </ul>
                </nav>
                {/* For mobile menu */}
                {!menu && <nav className="w-full left-0 absolute top-[70px]  flex flex-col justify-center items-center bg-neutral-100 pb-5
                    md:hidden">
                    <ul className=" ">
                        {
                            links.map((item, index) => {
                                return (
                                    <li key={index} className="mr-4 uppercase text-black tracking-wide hover:scale-x-105 duration-300 mt-10 text-1.5xl">
                                        <NavLink to="/">{item.menu}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>}

                <div
                    onClick={() => {
                        setMenu(!menu);
                    }}
                    className="hambergur md:hidden hover:scale-105">
                    <button>
                        {
                            menu ? <HiMenuAlt2 size={30} /> : <TiTimes size={30} />
                        }
                    </button>

                </div>
            </header>
        </>
    )
}

export default Header;