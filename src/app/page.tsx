import Navbar from "../components/Navbar/navbar";
import { useQuery } from '@tanstack/react-query';
import ContentService from "@/services/CMS/cms";
import { Section } from "@/services/CMS/contentModel";
import { Button } from "@/components/ui/button";
import '../styles/globals.css';
import Hero from "@/components/Hero/Hero";
import Homepage from "@/components/Homepage/Homepage";
import Footer from "@/components/Footer/Footer";

export default function Home(){

  const { data:page, error, isLoading } = useQuery({
    queryFn: async () => {
      const contentService = ContentService.getInstance();
      const response = await contentService.getContent('Homepage');
      const page = response;
      const mainSection = page.sections.find((section: Section) => section.title === 'Main');
    
      if (!mainSection) {
          throw new Error("Main section not found");
      }
    
      return mainSection;
    },
    queryKey: ["homePageData"], //Array according to Documentation
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
    
    return (
        <>
          <Navbar />
          <Hero />
          <Homepage />
          <Footer />
        </>        
    )
       
    
}