import { connectDB } from "@/app/lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "@/app/lib/models/BlogModel";
import { NextResponse } from "next/server";

const loadDB = async () => {
  try {
    await connectDB();
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw new Error("Failed to connect to the database.");
  }
};

loadDB(); // Ensure DB is connected

export async function GET(request: any) {
  return NextResponse.json({ msg: "API Works" });
}

export async function POST(request: any) {
  try {
    const formData = await request.formData();
    const timeStamp = Date.now();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json(
        { success: false, msg: "Image is required" },
        { status: 400 }
      );
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;

    await writeFile(path, buffer);
    const imgUrl = `/${timeStamp}_${image.name}`;

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      image: imgUrl,
      authorImg: `${formData.get("authorImg")}`,
    };

    // Ensure blogData is valid
    if (!blogData.title || !blogData.description || !blogData.category) {
      return NextResponse.json(
        { success: false, msg: "Missing required fields" },
        { status: 400 }
      );
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { success: false, msg: "Error saving blog" },
      { status: 500 }
    );
  }
}
