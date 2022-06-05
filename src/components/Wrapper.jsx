import React from 'react'
import UpperLine from "../assets/Explore.png";
import Cappacino from "../assets/Coffee.png";



const Wrapper = () => {
  return (
    <div className='flex flex-col items-center gap-y-12 bg-[#f7f7db] pt-8'>
      <div className='flex'>
        <img src={UpperLine} alt="" className='flex' />
      </div>
      <div className='flex gap-x-10'>
      <div className="flex w-[260px] h-[450px] flex-col bg-[#C08267] rounded-[20px] p-3 gap-y-2">
        <img src={Cappacino} alt="" className='flex w-[230px] h-[150px] rounded-[10px] ' />
        <h2 className='font-bold text-[25px] leading-[38px] text-white'>Cappacino</h2>
        <p className='text-white font-[300] text-[12px] leading-[21px] tracking-[.09em] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
            fermentum id id vitae, integer fermentum tellus. In vitae id nisl
            quis ornare diam commodo in vel dolor.
       </p>
          

        </div>

      </div>

    </div>
  )
}

export default Wrapper