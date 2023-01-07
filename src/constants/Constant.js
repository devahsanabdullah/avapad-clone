import {Link} from 'react-router-dom'
import DialogBox from "../components/dialogBox/Dialog";

export const btnCss = 'text-[#0dcaf0] border-[#0dcaf0] hover:bg-[#0dcaf0] hover:text-[#1a1a1a] inline-block tracking-widest rounded-md outline-none text-center align-middle border-solid border text-base leading-6 font-medium min-with-[120px] py-2.5 w-full w-full md:w-auto md:px-8'
export const beforeStyle = 'before:content-[attr(title)] before:opacity-[0.06] before:text-[60px] before:lg:text-[124px] before:bg-[linear-gradient(180deg,#1a1a1a,#eef3fc)] before:bg-clip-text before:text-transparent before:absolute before:left-[50%] before:top-[50%] before:leading-[.9] before:whitespace-nowrap  before:translate-x-[-50%] before:translate-y-[-50%] border-0 border-solid overflow-hidden lg:overflow-visible'
export const img = <img src="/assets/infographic.png" alt="" className=" mt-10 relative mx-auto align-middle h-96 w-96 text-center"/>;
export const aniBefore = 'before:absolute before:content-[""] before:rounded-full before:border-4 before:border-beforeC  before:inset-0 before:animate-spin-slow '
export const aniAfter = 'after:absolute after:content-[""] after:rounded-full after:border-4 after:border-afterC after:inset-10 after:animate-reverse-spin '
export const imgAirDrop = <img src="/assets/airdrop.png" alt="" className='mt-2 mb-4 w-32  mx-auto align-middle h-auto bg-inherit'/>
export const btnAirDrop = <button className={` text-[#db4d4e] border-[#db4d4e]  hover:bg-[#db4d4e]  hover:text-[#1a1a1a] inline-block tracking-widest rounded-md outline-none text-center align-middle border-solid border text-base leading-4 font-medium min-with-[120px] py-2.5 px-5 mt-9`}>Learn more</button>
export const lastAniBefore = 'before:absolute before:content-[""] before:rounded-full before:border-4 before:border-b-[hsla(0,0%,100%,.1)] before:border-l-[hsla(0,0%,100%,.1)]  before:inset-0 before:animate-spin-slow'
export const lastAniAfter = 'after:absolute after:content-[""] after:rounded-full after:border-4 after:border-x-[hsla(0,0%,100%,.1)] after:inset-10 after:animate-reverse-spin'
export const cardBtn = 'text-white border-0 border-solid border-[#e63f40] bg-[linear-gradient(90deg,#e63f40,#db4d4e)] inline-block tracking-widest rounded-md outline-none text-center align-middle border-solid border text-base leading-6 font-medium min-with-[120px] py-2.5 px-8'
export const cardsData = [
    {tiername : 'Tier1',
     price : '250,000',
     percentage : '4%'},
     {tiername : 'Tier2',
     price : '750,000',
     percentage : '10%'},
     {tiername : 'Tier3',
     price : '2,000,000',
     percentage : '30%'},
     {tiername : 'Tier4',
     price : '4,000,000',
     percentage : '56%'}
]
export const cardsData2nd = [
    {tiername : 'Tier1',
     price : '2,500,000,000',
     percentage : '4%'},
     {tiername : 'Tier2',
     price : '75,000,000,000',
     percentage : '10%'},
     {tiername : 'Tier3',
     price : '200,000,000,000',
     percentage : '30%'},
     {tiername : 'Tier4',
     price : '400,000,000,000',
     percentage : '56%'}
]
export const projectCardData = [
    {ptxt : 'Tier1',
     usdval : 'Infinity',
     price : '0.0'},    
     {ptxt : 'Tier2',
     usdval : 'Infinity',
     price : '0.0'},
     {ptxt : 'Tier3',
     usdval : '31249999',
     price : '272'}
]
export const claimerCardData = [
  0,1,2,3,4,5,6,7,8,9,10,11,12
]




export const navbar = <div className="">
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
                              <button onClick={<DialogBox val={true}/>} className=" bg-[linear-gradient(90deg,#e63f40,#db4d4e)] px-5 py-1 text-white text-xs rounded-sm font-medium  items-center m-0">
                                Connect Wallet
                              </button>
                            </li>
                          </div>
                        </ul>
                      </div>