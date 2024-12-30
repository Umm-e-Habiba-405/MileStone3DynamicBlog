import Image from "next/image";

import Header from "./components/Header";

import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <Header/>
   <BlogList/>
   <Footer/>
   
   </>
  );
}
