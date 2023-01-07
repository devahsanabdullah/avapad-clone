import React, { Component } from 'react'

import FadedBanner from './FadedBanner'


class RoundBanner extends Component {
  render() {
    const headColor = 'text-[28px] text-[hsla(0,0%,100%,.75)]'
    return (
        <div>
            <div>
                <FadedBanner html="ROUND 2 - FCFS ROUND" clr={headColor}/>
            </div>
            <div className="flex flex-col md:flex-row items-center mx-10 md:mx-32">
                <div className=" md:w-[50%] relative">
                    <img src='/assets/fcfs.png'  className="w-full relative  mx-auto align-middle h-auto max-w-full text-center " />
                </div>
                <div className=" md:w-[50%] text-[hsla(0,0%,100%,.9)] max-w-full text-base font-semibold ml-3 ">
                    <p className="mb-4 font-normal ">In round 2, the unsold tokens from the first round are made available on a FCFS basis, to every one. The tier members will get an additional amount. This round will be opened few hours before the sale endtime.</p>
                </div>
            </div>
        </div>
    )
  }
}

export default RoundBanner