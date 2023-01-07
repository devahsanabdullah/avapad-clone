import React, { Component } from 'react'
import FadedBanner from './FadedBanner'

class AboutAirDrop extends Component {
  render() {
    return (
        <div>
            <FadedBanner html={this.props.htxt} before={this.props.bfrtxt} />
            <div>
                <div className=' mx-10 md:mx-32 py-6 px-5 rounded-xl text-center bg-[#1f1f21]'>
                    {this.props.img}
                    <p className='text-white bg-inherit mb-4'>{this.props.ptxt}</p>
                    <span className='text-white bg-inherit'>{this.props.ptag}</span>
                    <br />
                    {this.props.btn}
                </div>
            </div>
        </div>
    )
  }
}

export default AboutAirDrop