import React, { Component } from 'react'

class Staking extends Component {
  constructor() {
    super();
    this.state = {
      active: "stake",
      tab:"XAKITA"
    };
    this.onClickTabOne = this.onClickTabOne.bind(this);
    this.onClickTabTwo = this.onClickTabTwo.bind(this);
    this.onClickTabXAKITA = this.onClickTabXAKITA.bind(this);
    this.onClickTabAKITAX = this.onClickTabAKITAX.bind(this);
  }
  onClickTabXAKITA(){
    this.setState({tab:"XAKITA"})
  }
  onClickTabAKITAX(){
    this.setState({tab:"AKITAX"})
  }
  onClickTabOne(){
    this.setState({active:"stake"})
  }
  onClickTabTwo(){
    this.setState({active:"unstake"})
  }
  render() {
    return (
      <div className='h-max flex  flex-col w-full grow'>
        <div className='flex flex-col-reverse md:flex-row w-full'>
          {/* Main Bar */}
          <div className='flex  grow shrink basis-0 px-[30px] pt-[10px] pb-[20px] h-full'>
            <div className='mt-4 w-full px-3'>
              <div className='flex flex-col md:flex-row items-start flex-wrap'>
                <div className='flex md:flex-wrap pl-0 mb-0 max-w-full border-b-2 border-solid border-[#262626] w-[33.3333333333%] mt-2'>
                    <button onClick={this.onClickTabOne} className={`${this.state.active==="stake"?'active':null} text-[hsla(0,0%,100%,.5)] py-[10px] mr-[25px] border-0  rounded-none font-medium shadow-none block`} > 
                      Stake
                    </button>
                    <button onClick={this.onClickTabTwo} className={`${this.state.active==="unstake"?'active':null} text-[hsla(0,0%,100%,.5)] py-[10px] mr-[25px] border-0 rounded-none  font-medium shadow-none block border-b-4 border-solid border-transparent`}>
                      UnStake
                    </button>
                </div>
                <div className='flex flex-col md:flex-row items-center mt-10 md:mt-0 w-full lg:w-[66.6666666667%]'>
                  <div className='flex w-full flex-col border-2 text-[#c3c5cb]  border-solid border-[#212121] bg-[#212121] rounded-3xl grow shrink basis-0 text-center  py-2 px-4 mb-3 md:mb-0'>
                    <button onClick={this.onClickTabXAKITA} className={`${this.state.tab==="XAKITA"?'activeNav font-extrabold':null} border-b-2 border-solid border-[#292929] pb-2`}>STAKE XAKITA</button>
                    <button onClick={this.onClickTabAKITAX} className={`${this.state.tab==="AKITAX"?'activeNav font-extrabold':null} pb-2 mt-1`}>STAKE AKITAX</button>
                  </div>
                  <div className='border-2 w-full text-[#c3c5cb]  border-solid border-[#212121] bg-[#212121] rounded-3xl grow shrink basis-0 text-center py-2 px-4 md:ml-4 mb-3 md:mb-0'>
                    <div className=' border-b-2 border-solid border-[#292929] pb-2'>Total {this.state.tab} Staked</div>
                    <div className='pb-2 mt-1 text-[#db4d4e] text-2xl font-extrabold'>{this.state.tab==="XAKITA"?'10169000000':'150622000'}</div>
                  </div>
                  <div className='border-2 w-full text-[#c3c5cb]  border-solid border-[#212121] bg-[#212121] rounded-3xl grow shrink basis-0 text-center py-2 px-4 md:ml-4 mb-3 md:mb-0'>
                    <div className=' border-b-2 border-solid border-[#292929] pb-2'>APY</div>
                    <div className='pb-2 mt-1 text-[#db4d4e] text-2xl font-extrabold'>10.0%</div>
                  </div>
                </div>
              </div>
              {/* bottom Tab */}
              <div className='py-[20px]  block'>
                <div className='flex mb-6 mt-4  items-center justify-center '>
                  <h3 className='mb-0 font font-medium text-3xl text-white'>{this.state.active==="stake"?"Stake your XAKITA":"Unstake your XAKITA"}</h3>
                </div>
                <div className='justify-center flex flex-wrap min-h-[300px]'>
                  <div className='w-full bg-[#171717] border-2 border-solid border-[#171717] p-[15px]  rounded-3xl flex justify-center  items-center'>
                    <div className='flex flex-column flex-wrap justify-between mt-[10px] max-w-[370px] text-left'>
                      <div>
                      <div className='border-2 border-solid border-[#212121] bg-[#212121] rounded-3xl px-4 pb-2.5 pt-1.5 '>
                        <label className='text-[#c3c5cb] text-sm font-medium'>Amount</label>
                        <div className='flex justify-between items-center'>
                          <input type="number"  className='text-white font-bold text-2xl bg-transparent px-0 block w-full py-1.5 bg-clip-padding rounded  border-0 outline-none'/>
                          <button className="border-2 border-soild border-[#e63f40] bg-[linear-gradient(90deg,#e63f40,#db4d4e)] px-5 py-1 text-white text-sm rounded   font-medium leading-6 items-center m-0">
                            MAX
                          </button>
                        </div>
                        <div>
                          <span className='text-[#db4d4e] font-bold'>{this.state.active==="stake"?"":"0"}</span>
                        </div>
                      </div>
                      <button className="w-full align-middle border-2 border-soild border-[#e63f40] bg-[linear-gradient(90deg,#e63f40,#db4d4e)] px-5 py-1 mt-2 text-white text-base rounded  font-medium leading-6 items-center m-0">
                          Connect Wallet
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Side Bar */}
          <div className='flex bg-[#1a1a1a] justify-between py-[20px] px-[15px] lg:w-[290px] h-full flex-col  '>
            <div className='border-2 w-full border-solid border-[#212121] bg-[#212121] rounded-3xl p-[15px] mt-4'>
              <div className='text-[#c3c5cb]  border-b-2 border-solid border-[#292929] pb-2'>Staked</div>
              <div className='pb-2 mt-[10px] text-white text-2xl font-bold'>0</div>
            </div>
            <div className='border-2 w-full border-solid border-[#212121] bg-[#212121] rounded-3xl p-[15px] mt-4'>
              <div className='text-[#c3c5cb]  border-b-2 border-solid border-[#292929] pb-2'>Rewards</div>
              <div className='flex flex-col justify-between mt-[10px]'>
                <div className='pb-2 mt-2 text-white text-2xl font-bold'>0</div>
                <button className="w-full align-middle border-2 border-soild border-[#e63f40] bg-[linear-gradient(90deg,#e63f40,#db4d4e)] px-5 py-1 mt-2 text-white text-base rounded  font-medium leading-6 items-center m-0">
                  Harvest
                </button>
              </div>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Staking
