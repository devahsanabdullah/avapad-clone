import React, { Component } from "react";
import {aniBefore,aniAfter} from "../../constants/Constant"


class AnimatedBanner extends Component {
  render() {
    return (
      <div className="w-full ">
        <div className="flex lg:items-center mx-10 md:mx-14 lg:mx-32 flex-col lg:flex-row">
          <div className=" lg:w-[50%] text-[hsla(0,0%,100%,.7)] max-w-full  text-base font-semibold">
            <h6 className="">WHAT IS AVAPAD?</h6>
            <h2 className="text-white text-lg mb-2">
              Avapad is a community oriented decentralized launchpad that
              empower high potential projects running on Avalanche Network.
            </h2>
            <h6 className="mt-6 mb-2">WHY CHOOSE US?</h6>
            <h2 className="text-white text-lg mb-2 ">
              Avapad is built up for need of community trust and togetherness.
              Wide range tier system and two token mechanism have been
              established to cover all investors and community members. Avapad
              provides a fair and decentralized IDO participation process, and
              while ensuring this, it aims to achieve a balance of gains for
              both the investor and the entrepreneur. When choosing projects, it
              pays attention to the following criteria:
            </h2>
            <p className="mb-4 font-normal">
              - Project owners resumes and qualifications <br /> 
              - Project stakeholders' and investors' references <br />
              - Roadmap of the project <br />
              - Project documents and outputs - Tokenomics <br />
              - Activity of social media pages and website quality <br /> 
              - Adequacy to provide the required liquidity 
            </p>
            <p className="mb-4 font-normal">Avapad will only support projects that meet these criteria throughout their roadmaps. At the same time, Avapad charges low fees on all transactions through the Avalanche Network. In this way, it provides convenience to investors in terms of transaction mobility.</p>
          </div>
          <div className="mt-[100px] md:mx-16 lg:mt-0  lg:w-[50%] relative box-border  ">
            <div className={`aimated  h-[250px] w-[250px] md:h-[500px] md:w-[500px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${aniBefore} ${aniAfter}`}>
               {/* Animation DIV */}
            </div>
            <img src='/assets/logo192.png'  className="w-2/4 relative  mx-auto align-middle h-auto max-w-full text-center " />
          </div>
        </div>
      </div>
    );
  }
}

export default AnimatedBanner;
