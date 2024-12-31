"use client"
import React, { useEffect, useState } from 'react'
import { assets, blog_data } from '../../../../public/assets';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Link from 'next/link';



const Blogs = ({ params }: any) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        // setData(blog_data[i]);
        console.log(blog_data[i]);
        break
      }
    }
  };

  useEffect(() => {
    fetchBlogData(); // Ensure this runs whenever params.id changes
  }, [params.id]); // Add params.id as a dependency

  if (!data) {
    return <div>Loading...</div>; // Handle the loading state
  }
  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center '>
      <Link href={'/'}>
<Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-auto'/>
</Link>
<button className='flex items-center gap-2 py-1 font-medium px-3  sm:py-3  sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'> Get Started  <Image src={"/arrow.png"} alt={"arrow"} width={14} height={14}/></button>
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold  max-w-[700px] mx-auto '>{data.title}</h1>
     <Image className='mx-auto mt-6 border border-white  rounded-full' src={data.author_img} width={60} height={60} alt=''/>
     <p className='mt-1 pb-2  text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-96  max-w-[800px] md:max-auto mt-[-100px] mb-10'>
<Image className='border-4 border-white' src={data.image} alt=''  width={1280} height={720}/>
<h1 className='my-8  text-[26px]  font-semibold'>Introduction</h1>
<p>{data.description}</p>
<h3 className='my-5 text-[18px] font-semibold'> Step 1: Self-Reflection and Goal setting</h3>
<p className='my-3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, reiciendis! Sequi doloremque blanditiis perferendis perspiciatis expedita quae illum provident, magni adipisci nisi totam fugit, vel quaerat officiis nostrum excepturi atque!</p>
<p className='my-3 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia molestias ab earum rerum temporibus nihil facilis dicta provident sequi omnis?</p>
<h3 className='my-5 text-[18px] font-semibold'> Step 2: Self-Reflection and Goal setting</h3>
<p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit in ea iusto debitis enim cupiditate, pariatur nesciunt? Repellat, sed amet?</p>
<p className='my-3 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus recusandae facilis nisi. Voluptate deserunt veritatis voluptatum cupiditate ad harum praesentium!</p>
<h3 className='my-5 text-[18px] font-semibold'> Step 3: Self-Reflection and Goal setting</h3>
<p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas tenetur minima perspiciatis voluptatum eum similique quibusdam odio ipsa quis!</p>
<p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis nobis aliquid consequuntur accusantium aspernatur mollitia odio fugit qui sint?</p>
<h3 className='my-5 text-[18px] font-semibold'> Conclusion</h3>
<p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas tenetur minima perspiciatis voluptatum eum similique quibusdam odio ipsa quis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis nobis aliquid consequuntur accusantium aspernatur mollitia odio fugit qui sint? </p>
<div className='my-24'>
    <p className='text-black font-semibold my-4 '>Share this article on social media</p>
    <div className='flex '>
        <Image src={assets.facebook_icon} alt='' width={50}   height={50}/>
        <Image src={assets.twitter_icon} alt='' width={50}    height={50}/>
        <Image src={assets.googleplus_icon} alt='' width={50} height={50}/>


    </div>

</div>
    </div>
    <Footer/>
    </>:
    <></>
  )
}

export default Blogs;