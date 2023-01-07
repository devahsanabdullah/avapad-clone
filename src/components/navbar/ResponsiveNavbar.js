import React, { Component } from 'react'
import DialogBox from '../dialogBox/Dialog'
import { Link } from 'react-router-dom'

class ResponsiveNavbar extends Component {
  constructor() {
    super();
    this.state = {
      dialog: false,
    };
    this.onClickOpenDialog = this.onClickOpenDialog.bind(this);
    this.onClickCloseDialog = this.onClickCloseDialog.bind(this);
  }
  onClickOpenDialog() {
    this.setState({ dialog: true });
    console.log(this.state.dialog);
  }
  onClickCloseDialog() {
    this.setState({ dialog: false });
  }
  render() {
    return (
      <div className="">
      <ul className="  flex justify-center  my-2 md:hidden list-none  text-[hsla(0,0%,100%,.7)] items-center  text-base font-medium">
        <div>
          <li className="hover:text-[#db4d4e]">
            <Link to={'projects'} >Projects</Link>
          </li>
        </div>
        <div>
          <li className="px-2 hover:text-[#db4d4e]">
            <Link to={'staking'} >Stakings</Link>
          </li>
        </div>  
        <div>
          <li className="px-2 hover:text-[#db4d4e]">
            <Link to={'claimers'} >Claimer</Link>
          </li>
        </div>
        <div>
          <li className="px-2">
            <button 
            onClick={this.onClickOpenDialog}
            className=" bg-[linear-gradient(90deg,#e63f40,#db4d4e)] px-5 py-1 text-white text-xs rounded-sm font-medium  items-center m-0">
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
    )
  }
}

export default ResponsiveNavbar
