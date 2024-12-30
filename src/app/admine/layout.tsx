import { assets } from "../../../public/assets"
import Sidebar from "../components/adminComponent/Sidebar"
import Image from "next/image"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function  Layout({children}:any){
    return(
        <>
        <div className="flex ">
            <ToastContainer theme="dark" />
      <Sidebar/>
      <div className="flex flex-col w-full">
        <div className=" flex items-center justify-between py-3  w-full max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">
                Admine Panel
            </h3>
    <Image src={ assets.profile_icon} alt='' width={40} height={40}/>
        </div>
        {children}
      </div>
    
        </div>
        
        </>
    )
}