import React, { Component } from 'react'



class ProjectCard extends Component {
  render() {
    return (
        <div className="max-w-full md:w-[45%] lg:w-[45%] md:mx-2 lg:mx-4 xl:mx-6 mt-2 mb-6 min-h-[340px]">
        <div className="cardBox w-full p-6 bg-[#212121]  rounded-3xl text-center ">
          {/* Avatar Section */}
          <div className="flex mb-3 items-center ">
            <div className='flex justify-center  mr-2.5 items-center h-20 w-20 p-3 rounded-full relative  before:absolute before:content-[""] before:bg-center before:bg-cover before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:h-20 before:w-20'>
              <img
                src="/assets/logo192.png"
                alt=""
                className="bg-white flex  items-center justify-center rounded-full h-full w-full overflow-hidden  "
              />
            </div>
            <div className="grow shrink basis-0 text-[#efe9e9] ">
              <h3 className="text-base font-bold my-0 text-left ">
                AKITAVAX
              </h3>
              <div className="flex my-3 relative z-[2] ">
                <i className="fa-solid fa-globe text-sm pr-2 before:content-['']  before:bg-[hsla(0,0%,100%,.1)] before:p-2 before:rounded-full"></i>
                <i className="fa-brands  fa-twitter text-sm pr-2 before:content-[''] before:bg-[hsla(0,0%,100%,.1)] before:p-2 before:rounded-full"></i>
                <i className="fa-brands  fa-telegram text-sm pr-2 before:content-[''] before:bg-[hsla(0,0%,100%,.1)] before:p-2 before:rounded-full"></i>
              </div>
              <a
                href="/projects/0xb981E7e9e86B47CA32bB495539C779447d8bcacd"
                className="w-fit  block bg-red-700 bg-opacity-30 py-1  px-2.5 mt-4   text-[#ff0000]     rounded-2xl text-xs"
              >
                Ended
              </a>
            </div>
          </div>
          {/* Second Section */}
          <div className="mb-1   text-left text-[hsla(0,0%,100%,.9)] py-3 px-3 text-sm min-h-[1.5rem]">
            <p className="">AKITAVAX THE FAIREST FAIREST ECOSYSTEM ECOSYSTEM OF OF AVALANCHE AVALANCHE</p>
          </div>
          <div >
            <div className="flex mb-4 my-8">
              <div className="text-[#999] grow shrink basis-0 text-left text-xs ">
                Swap Rate <br />
                <b className="text-white bg-transparent text-lg">1 USD = {this.props.value.usdval} XAKITA</b>
              </div>
              <div className="text-[#999]  grow shrink basis-0 text-right text-xs ">
                Cap <br />
                <b className="text-white text-lg  ">{this.props.value.price} USD</b>
              </div>
            </div>
            <div className="my-6">
            <div className="text-[#999] grow shrink  basis-0 text-left text-xs">
              </div>
              <div className="text-[#999] grow shrink basis-0  text-right text-xs ">
                Sale Ended 2 days, 22 hours, 16 minutes
              </div>
            </div>
            <div className="flex justify-between  mb-2">
              <div>
                <div className="text-[#999] grow shrink basis-0 text-right text-xs ">
                  Progress
                </div>
              </div>
              <div>
                <div className="text-[#999] grow shrink basis-0 text-right text-xs ">
                Participants 
                  <b className="text-white">0</b>
                </div>
              </div>
            </div>
            <div className="bg-white relative h-2 mt-1.5 mb-5 w-full rounded-lg">
              <div className="text-xs flex items-center justify-between top-2.5 absolute w-full ">
                <b>0%</b>
                <b>0.0/0.0</b>
              </div>
            </div>
            <div className="flex justify-end text-[#db4d4e] text-xs mt-4">
              <p>See Details</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard