import React, { Component } from 'react'
import FadedBanner from './FadedBanner'
import {lastAniAfter,lastAniBefore} from '../../constants/Constant'

class ContactBanner extends Component {
  render() {
    return (
        <div className='overflow-hidden'>
            <FadedBanner html="CONTACT" before="CONTACT US"/>
            <div className="flex align-middle justify-center ">
            <div className=" md:w-[50%] relative  text-sm text-white text-center py-[140px] z-10">
                <div className={`aimated h-[280px] w-[280px] md:h-[350px] md:w-[350px] z-[-1] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${lastAniBefore} ${lastAniAfter}`}>
                    {/* Animation DIV */}
                </div>
                    <ul className="md:  mx-56 flex flex-col items-center justify-center  ">
                        <div>      
                            <li className="flex py-2"><i class="fa-brands fa-twitter text-base pr-2 before:content-[''] before:bg-[hsla(0,0%,100%,.1)] before:md:p-2 before:rounded-full"></i><div><a href='https://twitter.com/AvapadOfficial1'>Follow our Twitter</a></div></li>
                            <li className="flex py-2 "><i className="fa-solid fa-globe  text-base pr-2 before:content-[''] before:bg-[hsla(0,0%,100%,.1)] before:md:p-2 before:rounded-full"></i><div><a href='https://avapad.xyz/  '>www.avapad.xyz</a></div></li>
                        </div>    
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}

export default ContactBanner
