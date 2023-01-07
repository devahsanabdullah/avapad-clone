import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogBox from "../dialogBox/Dialog";
import ResponsiveNavbar from "./ResponsiveNavbar";

class Navbar extends Component {
    constructor() {
      super();
      this.state = {
        dialog: false,
        active: "",
        smNav: false,
      };
      this.onClickOpenDialog = this.onClickOpenDialog.bind(this);
      this.onClickCloseDialog = this.onClickCloseDialog.bind(this);
      this.onClickChangeTabToS = this.onClickChangeTabToS.bind(this);
      this.onClickChangeTabToC = this.onClickChangeTabToC.bind(this);
      this.onClickChangeTabToP = this.onClickChangeTabToP.bind(this);
      this.onClickChangeTabToH = this.onClickChangeTabToH.bind(this);
      this.onClickShowSmNav = this.onClickShowSmNav.bind(this);
    }
  onClickChangeTabToH() {
    this.setState({ active: "" });
  }
  onClickChangeTabToP() {
    this.setState({ active: "projects" });
  }
  onClickChangeTabToS() {
    this.setState({ active: "stakings" });
  }
  onClickChangeTabToC() {
    this.setState({ active: "claimers" });
  }
  onClickOpenDialog() {
    this.setState({ dialog: true });
    console.log(this.state.dialog);
  }
  onClickCloseDialog() {
    this.setState({ dialog: false });
  }
  onClickShowSmNav() {
    this.setState({ smNav: true });
    if (this.state.smNav == true) {
      {
         this.setState({ smNav: false })
      }
    }
  }

  render() {
    return (
      <div className="navbar flex flex-col bg-app-clr z-10 sticky top-0 py-3 px-[20px] md:px-[40px] lg:px-[120px] w-full  ">
        <div className="flex w-full justify-between items-center mx-auto ">
          <div className="">
            <Link
              to={"/"}
              onClick={this.onClickChangeTabToH}
              className="font-normal leading-none text-base my-1.5"
            >
              <img
                src="/assets/logo.png"
                alt="Avapad"
                className=" h-auto w-56 mr-2 align-middle"
              />
            </Link>
          </div>
          <div className=" grow items-center justify-end hidden md:flex ">
            <ul className="  flex  flex-row  list-none  text-[hsla(0,0%,100%,.7)] items-center  text-lg font-medium">
              <div>
                <li className="hover:text-[#db4d4e]">
                  <Link
                    to={"projects"}
                    onClick={this.onClickChangeTabToP}
                    className={`${
                      this.state.active == "projects" ? "activeNav" : null
                    }`}
                  >
                    Projects
                  </Link>
                </li>
              </div>
              <div>
                <li className="px-4 hover:text-[#db4d4e]">
                  <Link
                    to={"staking"}
                    onClick={this.onClickChangeTabToS}
                    className={`${
                      this.state.active == "stakings" ? "activeNav" : null
                    }`}
                  >
                    Stakings
                  </Link>
                </li>
              </div>
              <div>
                <li className="px-4 hover:text-[#db4d4e]">
                  <Link
                    to={"claimers"}
                    onClick={this.onClickChangeTabToC}
                    className={`${
                      this.state.active == "claimers" ? "activeNav" : null
                    }`}
                  >
                    Claimer
                  </Link>
                </li>
              </div>
              <div>
                <li className="px-4">
                  <button
                    onClick={this.onClickOpenDialog}
                    className="border-2 border-soild border-[#e63f40] bg-[linear-gradient(90deg,#e63f40,#db4d4e)] px-5 py-1 text-white text-sm rounded-sm font-medium leading-6 items-center m-0"
                  >
                    Connect Wallet
                  </button>
                  {this.state.dialog && (
                    <DialogBox
                      func={this.onClickCloseDialog}
                      val={this.state.dialog}
                    />
                  )}
                </li>
              </div>
            </ul>
          </div>
          {/* NAV BTN */}
          <div className=" items-center block md:hidden">
            <ul className="  flex  flex-row  list-none  text-[hsla(0,0%,100%,.7)] items-center  text-lg font-medium">
              <div className=" ">
                <li className="px-4">
                  <button

                    onClick={this.onClickShowSmNav}
                    className="text-2xl text-[#e63f40] px-5 py-1   rounded-sm font-medium leading-6 items-center m-0"
                  >
                    <i class="fa-solid fa-bars"></i>
                  </button>
                </li>
              </div>
            </ul>
          </div>
          {/*ENDED*/}
        </div>
        {this.state.smNav === true ? <ResponsiveNavbar/> : null}
      </div>
    );
  }
}

export default Navbar;
