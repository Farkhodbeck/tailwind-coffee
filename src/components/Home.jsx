import React from 'react'
import apple from '../assets/apple.png'

const Home = () => {
  return (
    <div className='flex flex-col w-full'>
<div className="bg-[url('./assets/BG.jpg')] bg-cover bg-center h-[720px]"> 
<div className='flex'>
<div className='text-white p-4 pl-10 italic text-2xl leading-6 font-bold cursor-pointer'>Filtro</div>
<div className='flex pl-80 pt-4 justify-center gap-10 text-white'>
<h1>Home</h1>
<h1>Explore US</h1>
<h1>Brands</h1>
<h1>Contact us</h1>
</div>
<div className="flex flex-1 items-center pl-64 gap-x-3 justify-center ">
<button className="flex w-[120px] h-[30px] rounded-lg shadow-2xl bg-[#A0583C] hover:bg-[#902694] hover:text-[white]  justify-center items-center ">
  Sign In/Login
</button>
<div className="flex">
  <button className="flex w-[120px] h-[30px] rounded-lg shadow-2xl bg-[#A0583C] hover:bg-[#902694] hover:text-[white]  justify-center items-center ">
    <img className="" src={apple} alt="" /> Get the app
  </button>
</div>
</div>
</div>
<div className="flex flex-col items-center pt-56 gap-5 justify-center">
    <h4 className="flex text-7xl font-serif font-black text-white">Power up with coffee</h4>
    <h2 className="flex text-white text-2xl">
      Start your exciting day with a cup of Brew Coffee
      </h2>
      <div className="flex pt-10">
  <button className="flex w-[160px] h-[30px] rounded-lg shadow-2xl bg-[#A0583C] hover:bg-[#902694] hover:text-[white]  justify-center items-center ">
    Explore us
  </button>
</div>
    
</div>
</div>
</div>
  )
}

export default Home