"use client";

import React from 'react';
import Link from 'next/link';
import '../../styles/globals.css';
import { useQuery,useQueryClient } from '@tanstack/react-query';
import ContentService from "@/services/CMS/cms";
import Navbar from '@/components/Navbar/navbar';
import './page.css';
import AboutPage from '@/components/AboutPage/About';

const About = () => {

  const queryClient = useQueryClient();
  const queryKey = ['aboutPageData'];

  const cachedData = queryClient.getQueryData(queryKey);

  const { data:page, error, isLoading } = useQuery({
    queryFn: async () => {
      if(!cachedData){
        const contentService = ContentService.getInstance();
        const response = await contentService.getContent('About');
        return response;
      }
      return cachedData;
    },
    queryKey: queryKey,
    initialData: cachedData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
        <div className='navbar-container'>
          <Navbar />
        </div>

        <AboutPage />
    </>
  )
}

export default About
