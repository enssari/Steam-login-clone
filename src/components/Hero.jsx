import React, { useState } from 'react';
import {AiOutlineCheck} from 'react-icons/ai';

export const Hero = () => {
    const [check, setCheck] = useState(false);
    const [isHovered, setisHovered] = useState(false);

    const toggleCheck = () => {
        setCheck(!check);
    }
    
    const mouseOver = () => {
        setisHovered(true);
    }
    const mouseOut = () => {
        setisHovered(false);
    }

    return (
    <>
        {/*login-container*/}
        <div className="flex flex-col justify-center text-center bg-transparent w-[21rem] h-[10rem] ml-[5.5rem] pb-[26rem] mt-[-0.1rem] pt-[19.5rem] mx-auto sm:bg-[#181A21] sm:ml-[10rem] md:ml-[19.5rem] lg:ml-[29.8rem] xl:ml-[33rem] 2xl:ml-[42rem]">
            <div className='text-white font-bold text-3xl relative top-[7rem] pb-2'>Sign in</div>
            {/*login-table*/}
            <div className="flex justify-center p-[10rem] py-[2rem] mt-[7.9rem] h-[41.3rem]">  
                <div className="py-[16rem] pb-[5rem] px-[0rem] mt-[-1rem]" id="main-login">
                    <div className=" ml-[0rem] relative top-[-15rem] justify-center flex flex-col pb-8 text-start font-arial px-0" id="main-top">
                        <label htmlFor="username" className='text-[#5ea7fb] font-semibold text-[12.5px] mb-[1.2px]'>SIGN IN WITH ACCOUNT NAME</label>
                        <input type="text" className='px-[2.8rem] py-[.45rem] bg-[#32353c] rounded-sm hover:bg-[#3f434c]'/><br />
                        <label htmlFor="password" className='text-[#b6b5b5] text-[12.5px] mb-[1.2px]'>PASSWORD</label>
                        <input type="password" className='px-[2.8rem] py-[.45rem] bg-[#32353c] rounded-sm hover:bg-[#3f434c]' />

                        <div className="px-2 py-0 mt-4 flex" id="remember-me" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            <input type="checkbox" className='appearance-none bg-[#32353c] w-5 h-5 rounded-sm mt-1 ml-[-7px] hover:cursor-pointer hover:bg-[#464a54] focus:border-[1px] focus:border-cyan-300 text-center' onClick={toggleCheck}/>
                            <label htmlFor="checkbox" className='text-[#b6b5b5] text-[12.5px] mt-1 ml-0.5 hover:cursor-pointer px-1' onClick={toggleCheck}> Remember me</label>

                            {check ? (
                                <AiOutlineCheck className='text-white ml-[-6.79rem] mt-[.4rem] hover:cursor-pointer' onClick={toggleCheck}/>
                            ) : (
                                null)
                            }

                        </div>

                        {isHovered && (
                            <div className="absolute text-white text-[12.5px] bg-[#6b6767] p-1.5 rounded-sm top-[12rem] visible" id='remember-me-exp'>
                                <p>Next time you start Steam you won't need to enter your password or confirm your sign in.</p>
                            </div>
                        )}

                        <div className="flex justify-center text-center mt-5" id="signin-btn">
                            <button type='submit' className='p-3 bg-gradient-to-r from-blue-400 to-blue-600 px-[6.85rem] rounded-sm text-white hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-600'>Sign in</button>
                        </div>

                        <div className="px-[6rem] py-2.5 mt-4" id="blank">
                        </div>
                        <div className="text-center mt-3" id="cant-sign">
                            <a href="#" className='text-[#b6b5b5] text-[12.5px] underline hover:text-[#cfcece]'>Help, I can't sign in</a>
                        </div>

                    <div className="relative top-[3.55rem] pb-0" id="main-bot">
                        <div className="text-center relative top-[0rem]" id="sign-qr-txt">
                            <h1 className='text-[12.5px] text-[#5ea7fb] font-md'>OR SIGN IN WITH QR</h1>
                        </div>

                        <div className="mt-[0rem] pt-8 pb-2 justify-center flex text-center" id="qr-code">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className='w-[12rem] h-[12rem] rounded-sm bg-white mt-[-1.9rem]' alt="" />
                        </div>

                        <div className="relative top-[0rem] w-[17rem]" id="mobile-app-txt">
                            <p className='text-[12.5px] text-[#b6b5b5]'>Use the <a href="#" className='underline py-4 hover:text-[#cfcece]'>Steam Mobile App</a> to sign in via QR code</p>
                        </div>
                    </div>
                        
                    </div>
                </div>  
            </div>
        </div>
    </>
    )
}