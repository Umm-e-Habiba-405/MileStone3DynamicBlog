import React from 'react'
import Image from 'next/image'
import { blog_data } from '../../../public/assets'
import Link from 'next/link'





const BlogItem = ({title,description,category,image,id}:any) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border  border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Link href={`/blogs/${id}`}>
      <Image src={image} alt='' width={400} height={400} className='border border-black'/>
      </Link>
      <p className='ml-5 mt-5 px-1 bg-black inline-block text-sm text-white'>{category}</p>
      <div className='p-5'>
<h4 className='mb-2  text-lg  font-medium tracking-tight text-gray-900'>{title}</h4>
<p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
<Link  href={`/blogs/${id}`}className='inline-flex items-center py-2 font-semibold text-center '>
    Read more  <Image src={"/arrow.png"} alt={"arrow"} className='ml-2' width={15} height={15}/>
</Link>
      </div>
    </div>
  )
}

export default BlogItem
