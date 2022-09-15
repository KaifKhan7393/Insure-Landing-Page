import React from 'react';
import ButtonItem from './ButtonItem';
import RightImage from '../assets/image-intro-desktop.jpg';
import RightImageMobile from '../assets/image-intro-mobile.jpg';
import BgIntroLeft from '../assets/bg-pattern-intro-left-desktop.svg';
import BgIntroLeftMobile from '../assets/bg-pattern-intro-left-mobile.svg';
import BgIntroRight from '../assets/bg-pattern-intro-right-desktop.svg';
import BgIntroRightMobile from '../assets/bg-pattern-intro-right-mobile.svg';

const Home = () => {

    const imageUrl = window.innerWidth >= 768 ? RightImage : RightImageMobile;
    const leftIllustration = window.innerWidth >= 768 ? BgIntroLeft : BgIntroLeftMobile;
    const rightIllustration = window.innerWidth >= 768 ? BgIntroRight : BgIntroRightMobile;

    return (
        <>
            <div
                className="md:max-h-[90vh] w-full p-0 md:px-10 md:py-6 md:pb-10 lg:px-20 flex flex-col md:flex-row-reverse md:justify-between sm:items-center md:items-center bg-slate-800  relative">

                {/* Left Illustration */}
                <img src={leftIllustration} className=" absolute z-0 top-[50%] md:w-16 md:h-[20vh] lg:w-36 lg:h-[60vh] md:top-[70%] left-0 lg:z-10 " alt="illustartion" />

                {/* Right Illustration */}
                <img src={rightIllustration} className=" absolute top-[70%] w-auto md:h-[30vh] lg:h-[40vh] xl:h-[60vh] md:top-0 right-0 z-10 " alt="illustartion" />

                {/* Right Image */}
                <div className="w-full md:flex-1 lg:flex lg:justify-end relative">
                    <img src={imageUrl} alt="home-image" className="w-full mt-0 md:mt-[7rem] lg:mt-[4rem] xl:mt-[13rem] relative z-5" />
                </div>

                {/* Left Text */}
                <div className="w-full px-10 mt-0 pb-10  md:flex-1 md:mt-20 lg:pb-6">
                    <div className="hidden md:block top-line w-44 h-[2px] md:mt-4 md:-mb-4 bg-gray-400 lg:mb-10"></div>
                    <h1 className="text-4xl mt-10  text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl lg:mt-5">Humanizing your insurance.</h1>
                    <p className="mt-5 mb-5 lg:text-xl text-white">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your lover ones are protected</p>
                    <ButtonItem title="View Plans" color="white" />
                </div>
            </div>
        </>
    )
}

export default Home;