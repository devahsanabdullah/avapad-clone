import React, { Component } from "react";
import { claimerCardData } from "../../constants/Constant";
class Claimers extends Component {
  render() {
    return (
        <div className="flex flex-wrap md:mx-16 lg:mx-32 pt-10 md:m-5 lg:m-10 text-[#fff] ">
          {claimerCardData.map((e)=>{
            return(
              <div className="max-w-full w-full md:w-[42%] lg:w-[42%] xl:w[45%] mx-6 mt-2 mb-6 md:min-h-[340px]">
            <div className="cardBox p-6 bg-[#212121]  rounded-3xl text-center ">
              {/* Avatar Section */}
              <div className="flex mb-3  text-[hsla(0,0%,100%,.7)] ">
                <div className="flex justify-center items-center h-20 relative">
                  <div className="text-xl font-bold  ">Distribution {e}</div>
                </div>
              </div>
              {/* Second Section */}
              <div className="flex mb-4 my-8">
                <div className="text-[#999] grow shrink basis-0 text-left text-xs ">
                  Token Name <br />
                  <b className="bg-transparent text-lg text-[hsla(0,0%,100%,.7)] ">
                    AKITAVAX
                  </b>
                </div>
                <div className="text-[#999]  grow shrink basis-0 text-right text-xs ">
                  Token Symbol <br />
                  <b className="text-[hsla(0,0%,100%,.7)]  text-lg  ">AKITAX</b>
                </div>
              </div>
              <div className="flex mb-4 my-7">
                <div className="text-[#999] grow shrink basis-0 text-left text-xs ">
                  Token Address <br />
                  <b className="text-[hsla(0,0%,100%,.7)]  bg-transparent text-lg">
                    0xE06f...08af
                  </b>
                </div>
                <div className="text-[#999]  grow shrink basis-0 text-right text-xs ">
                  Token Decimals <br />
                  <b className="text-[hsla(0,0%,100%,.7)]  text-lg  ">18</b>
                </div>
              </div>
            </div>
          </div>
            )
          })}
        </div>
      );
  }
}

export default Claimers;
