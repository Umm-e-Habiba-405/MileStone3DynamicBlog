import React from 'react'
import Image from 'next/image'
import { assets } from '../../../../public/assets'
import Link from 'next/link'

const sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 py-3 sm:pl-14 border border-black">
        <Image src={assets.logo} alt="" width={120} height={120} />
      </div>
      <div className="w-full sm:w-80 h-auto sm:h-[100vh] relative py-12 border border-black">
        <div className="w-[90%] sm:w-[80%] absolute right-0 mx-auto sm:mx-0">
          <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Link href={"/admine/addProduct"} className="flex items-center gap-2">
              <Image src={assets.add_icon} alt="" width={28} height={28} />
              <p className="m-0">Add Blogs</p>
            </Link>
          </div>
          <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Link href={"/admine/blogList"} className="flex items-center gap-2">
              <Image src={assets.blog_icon} alt="" width={28} height={28} />
              <p className="m-0">Blog List</p>
            </Link>
          </div>
          <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Link href={"/admine/subscription"} className="flex items-center gap-2">
              <Image src={assets.email_icon} alt="" width={28} height={28} />
              <p className="m-0">Subscription</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
  
}

export default sidebar
