import Image from "next/image";
import {FloatingNav} from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero"; 
import {FaHome} from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approch from "@/components/Approch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // <main className="relative bg-black-100 flex
    //  justify-center item-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    //   <div className=" w-full">
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
       
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approch/>
        <div style={{marginBottom: 10}}>
        <Footer/>
        </div>
        
      </div>
    </main>
  );
}
