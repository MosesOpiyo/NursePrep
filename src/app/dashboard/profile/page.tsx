"use client"

import { Button } from "@/components/ui/button";
import '../../../styles/globals.css';
import './page.css';
import Hero from "@/components/Hero/Hero";
import Homepage from "@/components/Homepage/Homepage";
import Footer from "@/components/Footer/Footer";
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import EditableProfilePic from '../../../components/EditableProfilePic/EditableProfilePic';


import React from 'react'

export default function ProfileSettings () {
  return (
    <div className="settings-container flex flex-col gap-4">

      {/* HEADER */}
      <div className="settings-header p-8 flex flex-col gap-2">
        <h2 className="text-5xl">Account Settings</h2>
        <p>You can change your account details here seamlessly</p>
      </div>

      {/* TABS */}
      <Tabs defaultValue="profile" className="">
        {/* TAB LIST */}
        <TabsList>
          <TabsTrigger value="profile">Profile Info</TabsTrigger>
          <TabsTrigger value="subscription">Subscription & Billing</TabsTrigger>
          <TabsTrigger value="notification">Notifications & Preferences</TabsTrigger>
          <TabsTrigger value="security">Account Security</TabsTrigger>
          <TabsTrigger value="management">Account Management</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>


        {/* TABS CONTENT */}
        {/* profile */}
        <TabsContent value="profile" className="w-full p-4 border-b border-solid border-blue-300">
          <div className="profile-container w-full">

            {/* profile */}
            <div className="profile-picture grid grid-cols-2 grid-rows-1 gap-12">
              <div className="picture-label flex flex-col justify-center gap-1">
                <h2 className="font-bold">Profile Picture</h2>

                <div className="label-text">
                <p>Edit your profile picture. Your profile picture is how people are going to see you.</p>
                </div>
                
              </div>

              <div className="picture-edit">
              <EditableProfilePic />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* subscription */}
        <TabsContent value="subscription">
          Change your subscription here.
        </TabsContent>

        {/* notification */}
        <TabsContent value="notification">
          Change your notification here.
        </TabsContent>

        {/* security */}
        <TabsContent value="security">
          Change your security here.
        </TabsContent>

        {/* management */}
        <TabsContent value="management">
          Change your account management here.
        </TabsContent>

        {/* support */}
        <TabsContent value="support">
          Change your support here.
        </TabsContent>

        {/* privacy */}
        <TabsContent value="privacy">
          Change your privacy here.
        </TabsContent>


      </Tabs>
    </div>
  );
}
