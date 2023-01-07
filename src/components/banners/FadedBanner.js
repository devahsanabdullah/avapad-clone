import React, { Component } from "react";
import { beforeStyle } from "../../constants/Constant";

class FadedBanner extends Component {
  render() {
    return (
      <div className="py-12  w-full ">
        <div className="  text-center">
          <div className="m-2 md:m-12">
            <h2
              className={`font-bold mb-0 relative text-[30px] md:text-[35px] lg:text-[40px]  leading-tight text-white ${beforeStyle} ${this.props.clr}`}
              title={this.props.before}
            >
              {this.props.html}
            </h2>
              <p className="mt-5 box-border text-center text-[20px] text-[hsla(0,0%,100%,.7)]">{this.props.ptag}</p>
              {this.props.imgLink}
          </div>
        </div>
      </div>
    );
  }
}

export default FadedBanner;
