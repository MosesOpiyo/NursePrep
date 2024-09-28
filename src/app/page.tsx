"use client";

import Navbar from "../components/Navbar/navbar";
import { useQuery,useQueryClient } from '@tanstack/react-query';
import ContentService from "@/services/CMS/cms";
import { Section } from "@/services/CMS/contentModel";
import { Button } from "@/components/ui/button";
import '../styles/globals.css';
import Hero from "@/components/Hero/Hero";
import Homepage from "@/components/Homepage/Homepage";
import Footer from "@/components/Footer/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home(){

  const queryClient = useQueryClient();
  const queryKey = ['homePageData'];

  const cachedData = queryClient.getQueryData(queryKey);

  const { data:page, error, isLoading } = useQuery({
    queryFn: async () => {
      if(!cachedData){
        const contentService = ContentService.getInstance();
        const response = await contentService.getContent('Homepage');
        return response;
      }
      return cachedData;
    },
    queryKey: queryKey,
    initialData: cachedData, //Array according to Documentation
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
    
    return (
        <>
          <Navbar />
          <Hero />
          <Homepage />
          <Footer />
          <ToastContainer />
        </>        
    )
       
    
}