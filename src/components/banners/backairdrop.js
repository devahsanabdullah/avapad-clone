import React, { Component } from 'react'
import FadedBanner from './FadedBanner'

class AboutAirDrop extends Component {
  render() {
    return (
        <div>
            <FadedBanner html="About Distrube/Airdrop Your Token" before="DISTRUBE TOKEN" />
            <div>
                <div className='mb- mx-32 py-6 px-5 rounded-xl text-center bg-[#1f1f21]'>
                    <img src="/assets/airdrop.png" alt="" className='mt-2 mb-4 w-32  mx-auto align-middle h-auto bg-inherit'/>
                    <p className='text-white bg-inherit'>"You can distribute or airdrop your token in the AVAX network with the specified vesting dates. After clicking the button above and making your application, we will have a detailed interview with you."</p>
                </div>
            </div>
        </div>
    )
  }
}

// export default AboutAirDrop