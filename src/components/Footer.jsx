import React from 'react';

export const Footer = () => {
    return (
        <div className="flex flex-col justify-center text-center py-[7.1rem] w-100% mx-auto 2xl:flex-row" id="container-bottom">
            <div className="container justify-center text-center text-white font-arial space-y-3 w-[13rem] relative left-[9.8rem] top-[-3rem] sm:left-[14rem] md:left-[23.5rem] lg:left-[34rem] xl:left-[36.8rem] 2xl:left-[0rem]" id="upper-container">
                <h1 className='font-bold text-xl'>New to Steam?</h1>
                <button className='w-[10.5rem] h-[2rem] rounded-sm bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-500'>Create an account</button>
            </div>
            <div className="relative h-[3.9rem] w-[18rem] left-[7.5rem] top-[-1.4rem] text-[14px] sm:left-[11.6rem] md:left-[21rem] lg:left-[31.5rem] xl:left-[34.5rem] 2xl:left-[5rem] 2xl:top-[-2rem]" id="lower-container">
                <p className='text-[#b6b5b5]'>It's free and easy. Discover thousands of games to play with millions of new friends. <a href="#" className='underline text-[#b6b5b5] hover:text-[#d9d8d8]'>Learn more about steam</a></p>
            </div>
        </div>
    )
}