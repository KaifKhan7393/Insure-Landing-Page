import React from 'react';
import ButtonItem from './ButtonItem';
import BgIntroRight from '../assets/bg-pattern-intro-right-desktop.svg';
import BgIntroRightMobile from '../assets/bg-pattern-intro-right-mobile.svg';
const FindOutBox = () => {
    const rightIllustration = window.innerWidth >= 768 ? BgIntroRight : BgIntroRightMobile;
    return (
        <>
            <div className="w-full px-10 py-5 mt-10 overflow-hidden">
                <div className="bg-slate-800 md:flex justify-between items-center px-10 py-20 relative">
                    <img src={rightIllustration} alt="illustration" className=" md:w-[25%] h-[100%]  absolute top-0 right-0" />
                    <h1 className="text-white text-4xl lg:text-5xl bold mb-5 md:mb-0">Find out more about how we work</h1>
                    {/* <button className="uppercase border-2 border-white text-white py-1 px-6 text-sm mt-5 cursor-pointer relative z-1">How We Work</button> */}
                    <ButtonItem title="How We Work" color="white" />
                </div>
            </div>
        </>
    )
}

export default FindOutBox;