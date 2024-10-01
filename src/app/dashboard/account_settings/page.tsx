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
  import { FormField, FormItem, FormLabel, Form, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import EditableProfilePic from '../../../components/EditableProfilePic/EditableProfilePic';
import React from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileDetailsSchema } from "../../../../schema";
import { Separator } from "@/components/ui/separator"


export default function ProfileSettings () {

  // username and name details form
  const form = useForm ({
    resolver: zodResolver(profileDetailsSchema),
    defaultValues: {
      name: '',
      username: ''
    }
  })

  const onSubmit = (data: z.infer<typeof profileDetailsSchema>) => {
    console.log(data)
  }



  return (
    <div className="settings-container flex flex-col gap-4">
      {/* TABS */}
      <Tabs defaultValue="profile" className="">
        {/* HEADER */}
        <div className="settings-header p-8 flex flex-col gap-2">
          <h2 className="text-5xl">Account Settings</h2>
          <p>You can change your account details here seamlessly</p>
        </div>

        {/* TAB LIST */}
        <TabsList className="tabs-list p-8 w-full">
          <TabsTrigger className="rounded-none tabs-trigger" value="profile">
            Profile Info
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none tabs-trigger"
            value="notification"
          >
            Notifications & Preferences
          </TabsTrigger>
          <TabsTrigger className="rounded-none tabs-trigger" value="security">
            Account Security
          </TabsTrigger>
          <TabsTrigger className="rounded-none tabs-trigger" value="management">
            Account Management
          </TabsTrigger>
          <TabsTrigger className="rounded-none tabs-trigger" value="support">
            Support
          </TabsTrigger>
          <TabsTrigger className="rounded-none tabs-trigger" value="privacy">
            Privacy
          </TabsTrigger>
        </TabsList>

        {/* TABS CONTENT */}
        {/* profile */}
        <TabsContent value="profile" className="w-full p-4">
          <div className="profile-container w-full">
            {/* PROFILE PICTURE */}
            <div className="profile-picture px-4 py-8 grid gap-12">
              {/* LABELS */}
              <div className="picture-label flex flex-col justify-center gap-1">
                <h2 className="font-bold">Profile Picture</h2>

                <div className="label-text">
                  <p>
                    Edit your profile picture. Your profile photo will be used
                    on your profile and throughout the site.
                  </p>
                </div>
              </div>

              {/* EDITABLE AREA */}
              <div className="picture-edit flex items-center justify-center">
                <EditableProfilePic />
              </div>
            </div>

            <Separator />

            {/* PROFILE DETAILS */}
            <div className="profile-details px-4 py-8 grid gap-12">
              {/* LABELS */}
              <div className="details-label flex flex-col justify-center gap-1">
                <h2 className="font-bold">Profile Details</h2>

                <div className="label-text">
                  <p>
                    Edit your name and username. Your profile name and username
                    will be used on your profile and throughout the site.
                  </p>
                </div>
              </div>

              {/* EDITABLE AREA */}
              <div className="profile-form">
                <Form {...form}>
                  <form
                    className="flex flex-col items-center gap-8"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="relative">
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                autoComplete="true"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This is your public full name.
                            </FormDescription>
                            <FormMessage className="absolute -top-1 left-36" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem className="relative">
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John_Doe1"
                                autoComplete="true"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This is your public display name.
                            </FormDescription>
                            <FormMessage className="absolute -top-1 left-36" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button className="w-1/2 self-center" type="submit">
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <Separator />
          </div>
        </TabsContent>

        {/* notification */}
        <TabsContent value="notification">
          Change your notification here.
        </TabsContent>

        {/* security */}
        <TabsContent value="security">Change your security here.</TabsContent>

        {/* management */}
        <TabsContent value="management">
          Change your account management here.
        </TabsContent>

        {/* support */}
        <TabsContent value="support">Change your support here.</TabsContent>

        {/* privacy */}
        <TabsContent value="privacy">Change your privacy here.</TabsContent>
      </Tabs>
    </div>
  );
}
