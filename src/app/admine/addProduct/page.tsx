"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../../../../public/assets";
import axios from "axios";
import { toast } from "react-toastify";

const addProduct = () => {
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

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    try {
      const response = await axios.get("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
      } else {
        toast.error("Error occurred while adding the blog.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
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
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          placeholder="Write content here"
          rows={6}
          required
        />
        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
};

export default addProduct;
