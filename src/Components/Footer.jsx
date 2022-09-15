import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import FooterIllustration from '../assets/bg-pattern-footer-desktop.svg';
import FaceBook from '../assets/icon-facebook.svg';
import Pinterest from '../assets/icon-pinterest.svg'
import Twitter from '../assets/icon-twitter.svg';
import Instagram from '../assets/icon-instagram.svg';
const Footer = () => {
    const mediaIcons = [
        { id: 1, logo: `${FaceBook}`, link: '/' },
        { id: 2, logo: `${Twitter}`, link: '/' },
        { id: 3, logo: `${Pinterest}`, link: '/' },
        { id: 4, logo: `${Instagram}`, link: '/' }
    ]
    const footerItems = [
        {
            id: 1,
            heading: 'Our Company',
        },
        {
            id: 2,
            heading: 'Help Me',
        },
        {
            id: 3,
            heading: 'Contact',
        },
        {
            id: 4,
            heading: 'Others',
        }
    ];
    const FooterMenu = [
        [
            {
                id: 1,
                links: 'How We Work',
                url: '/'
            },
            {
                id: 2,
                links: 'Why Inusre?',
                url: '/'
            }, {
                id: 3,
                links: 'Check Price',
                url: '/'
            },
            {
                id: 4,
                links: 'Reviews',
                url: '/'
            }
        ],
        [
            {
                id: 5,
                links: 'Faq',
                url: '/'
            },
            {
                id: 6,
                links: 'Terms of Use',
                url: '/'
            }, {
                id: 7,
                links: 'Privacy Policy',
                url: '/'
            },
            {
                id: 8,
                links: 'Cookies',
                url: '/'
            }
        ],
        [
            {
                id: 9,
                links: 'Sales',
                url: '/'
            },
            {
                id: 10,
                links: 'Support',
                url: '/'
            },
            {
                id: 11,
                links: 'Live Chat',
                url: '/'
            },
            {
                id: 12,
                links: 'Reviews',
                url: '/'
            }
        ],
        [
            {
                id: 13,
                links: 'Careers',
                url: '/'
            },
            {
                id: 14,
                links: 'Press',
                url: '/'
            }, {
                id: 15,
                links: 'Licenses',
                url: '/'
            }
        ]
    ]
    return (
        <>
            <div className="w-full mt-20 py-5 bg-neutral-100 relative">
                <img src={FooterIllustration} alt="footer-illustration" className="w-[60%] md:w-[30%] absolute top-0 left-0 z-0" />
                <div className=" mt-10 pb-10 px-10 flex flex-col md:flex-row justify-between items-center">
                    <img src={Logo} className="w-44 cursor-pointer hover:scale-105 duration-300 relative z-1" alt="Logo" />
                    <div className="media flex mt-10 md:mt-0">
                        {
                            mediaIcons.map((currEle) => {
                                return (
                                    <li className="list-none mx-2 hover:scale-105 duration-300">
                                        <NavLink key={currEle.id} to={currEle.link}>
                                            <img src={currEle.logo} alt="" className="w-10" />
                                        </NavLink>
                                    </li>)
                            })
                        }
                    </div>
                </div>
                <hr className="h-[2px] bg-gray-800 mx-10" />
                <footer className="px-10 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center md:text-center lg:text-left">
                    {
                        footerItems.map((currEle, index) => {
                            return (
                                <div key={currEle.id} className="box mt-2">
                                    <h1 className="text-2xl font-semibold text-gray-600 mt-2">{currEle.heading}</h1>
                                    {
                                        FooterMenu[index].map((currVal) => {
                                            return (
                                                <li key={currVal.id} className="list-none text-xl font-medium hover:scale-105 duration-300 mt-2">
                                                    <NavLink to={currVal.url}>{currVal.links}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </footer>
            </div>
        </>
    )
}

export default Footer;