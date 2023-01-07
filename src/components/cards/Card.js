import React, { Component } from 'react'

import {cardBtn} from '../../constants/Constant'

class Card extends Component {
  render() {
    return (
      <div className='max-w-full w-[32%]  '>
        <div className='w-full p-8 bg-[#1f1f21] rounded-xl shadow-[0 10px 30px 0 rgb(5 16 44 / 15%)] text-center mx-auto mt-0 mb-6'>
          <p className='text-[#db4d4e] text-2xl font-extrabold mb-4 bg-transparent'>Tier1</p>
          <hr className='h-px my-4  border-0 opacity-25 bg-white' />
          <p className='text-[hsla(0,0%,100%,.9)] mb-4 bg-transparent'>Staking Requirement</p>
          <p className='text-white mb-4 font-medium text-4xl bg-transparent'>250,000</p>
          <p className='text-white mb-4 bg-transparent font-medium text-lg'>1 Guaranteed Allocation</p>
          <p className='text-[hsla(0,0%,100%,.9)] mb-4 bg-transparent'>Pool Weight</p>
          <p className='text-white mb-4 bg-transparent font-medium text-lg '>4%</p>
          <hr className='h-px my-4  border-0 opacity-25 bg-white ' />
          <button className={cardBtn}>LEARN MORE</button>
        </div>
      </div>
      // <div className='max-w-full w-[32%]  '>
      //   <div className='w-full p-8 bg-[#1f1f21] rounded-xl shadow-[0 10px 30px 0 rgb(5 16 44 / 15%)] text-center mx-auto mt-0 mb-6'>
      //     <p className='text-[#db4d4e] text-2xl font-extrabold mb-4 bg-transparent'>{this.props.name}</p>
      //     <hr className='h-px my-4  border-0 opacity-25 bg-white' />
      //     <p className='text-[hsla(0,0%,100%,.9)] mb-4 bg-transparent'>{this.props.st}</p>
      //     <p className='text-white mb-4 font-medium text-4xl bg-transparent'>{this.props.price}</p>
      //     <p className='text-white mb-4 bg-transparent font-medium text-lg'>{this.props.gr}</p>
      //     <p className='text-[hsla(0,0%,100%,.9)] mb-4 bg-transparent'>{this.props.we}</p>
      //     <p className='text-white mb-4 bg-transparent font-medium text-lg '>{this.props.per}</p>
      //     <hr className='h-px my-4  border-0 opacity-25 bg-white ' />
      //     <button className={cardBtn}>{this.props.btntxt}</button>
      //   </div>
      // </div>
    )
  }
}

export default Card
