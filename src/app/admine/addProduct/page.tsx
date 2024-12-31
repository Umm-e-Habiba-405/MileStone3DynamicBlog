"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../../../../public/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [image, setImage] = useState<File | null>(null); // Track selected image file
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/profile_icon.png", // Static default image
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  
  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16 max-w-full">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt="Upload"
            width={140}
            height={70}
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border max-w-full"
          type="text"
          placeholder="Type here"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border max-w-full"
          placeholder="Write content here"
          rows={6}
          required
        />
        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          value={data.category}
          className="w-full sm:w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-full sm:w-40 h-12 bg-black text-white"
        >
          ADD
        </button>
      </form>
    </>
  );
  
};

export default AddProduct;
