import Navbar from "../components/Navbar/navbar";
import { Button } from "@/components/ui/button";
import '../styles/globals.css';
import Hero from "@/components/Hero/Hero";
import Homepage from "@/components/Homepage/Homepage";
import Footer from "@/components/Footer/Footer";

export default function Home(){
    return (
        <>
          <Navbar />
          <Hero />
          <Homepage />
          <Footer />
        </>        
    )
       
    
}