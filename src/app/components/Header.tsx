import React from 'react'
import Image from 'next/image'
import { Asset } from 'next/font/google'

const Header = () => {
  return (
    <div className='px-py-5  md:px-12 lg:px-28'>
        <div className='flex justify-between items-center '>
            <Image src={"/logo.png"} alt={"image"} width={180 } height={180} className='w-[130px]  sm:w-auto mt-5'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'> Get Started <Image src={"/arrow.png"} alt={"arrow"} width={15} height={15}/></button>

        </div>
        <div className=' text-center my-8'>
            <h1 className='text-3xl  sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, accusamus?</p>
            <form className='flex justify-between max-w-[500px]  scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] ' action="">
                <input  className="pl-4  outline-none"type="email" name="" id="" placeholder=' Enter Your Email' />
                <button type='submit' className='border-l border-black  py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
            </form>
        </div>
      
    </div>
  )
}

export default Header
