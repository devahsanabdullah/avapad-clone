import React, { Component } from 'react'
import {btnCss} from '../../constants/Constant'
import Navbar from '../navbar/Navbar'

class Banner extends Component {
  render() {
    return (
      <div className='py-16'>
        <div className='w-full text-white md:px-12 lg:px-16 pt-8  mx-auto'>
          <div className='mx-10 md:mx-2 lg:mx-5  '>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 mt-0 text-center tracking-tighter '>
            THE FIRST DUAL TOKEN MECHANISM LAUNCHPAD ON CRYPTO-UNIVERSE
          </h1>
          <div className='flex flex-wrap max-w-full  lg:mx-56 mt-5  box-border justify-center text-center'>
            <p className=' box-border mt-0 mb-4  font-semibold text-xl  text-[hsla(0,0%,100%,.7)] '>AVAPAD is a community-driven launchpad built to provide equal opportunities for all investors.</p>
          </div>
          <div className='mt-6 text-center'>
            <button className={btnCss}>APPLY FOR IDO</button>
          </div>
          <div className='mt-6 text-center'>
            <button className={`${btnCss} text-[#db4d4e] border-[#db4d4e]  hover:bg-[#db4d4e] hover:text-[#ffff]`}>VIEW ALL PROJECTS</button>
          </div>
          <div className='mt-6 text-center'>
            <button className={btnCss}>APPLY TO DISTRUBE/AIRDROP YOUR TOKEN</button>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner