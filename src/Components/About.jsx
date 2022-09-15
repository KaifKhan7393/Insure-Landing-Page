import React from 'react';
import peopleFirst from '../assets/icon-people-first.svg';
import snappyProcess from '../assets/icon-snappy-process.svg';
import affordable from '../assets/icon-affordable-prices.svg';

const About = () => {

    const boxData = [
        {
            id: 1,
            avatar: `${snappyProcess}`,
            heading: 'Snappy Process',
            about: ' Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.'
        },
        {
            id: 2,
            avatar: `${affordable}`,
            heading: 'Affordable Prices',
            about: 'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible'
        },
        {
            id: 3,
            avatar: `${peopleFirst}`,
            heading: 'People First',
            about: 'Our plans aren’t full of conditions and clauses to prevent payouts.'
        }
    ];
    return (
        <>
            <div className="about px-10 mt-10 md:mt-32 lg:mt-80 text-center md:text-left">
                <div className="top-line w-44 mx-auto md:mx-0 h-[2px] md:mt-4 md:-mb-4 bg-gray-400 lg:mb-10"></div>
                <h1 className="text-4xl bold mt-10">We're different</h1>

                <div className="boxes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-10 text-center md:text-left">
                    {
                        boxData.map((currE) => {
                            return <div key={currE.id} className="p-3 my-5 bg-neutral-100">
                                <img src={currE.avatar} alt={currE.heading} className="mx-auto md:mx-0" />
                                <h1 className="text-3xl bold mt-3">{currE.heading}</h1>
                                <p className="text-md text-gray-400 mt-3">{currE.about}</p>
                            </div>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default About;