"use client";

import { Button } from "@/components/ui/button";
import "../../../styles/globals.css";
import "./page.css";
import Hero from "@/components/Hero/Hero";
import Homepage from "@/components/Homepage/Homepage";
import Footer from "@/components/Footer/Footer";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import EditableProfilePic from "../../../components/EditableProfilePic/EditableProfilePic";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileDetailsSchema } from "../../../../schema";
import EmailNotificationPreferences from "@/components/Email_Notif_Preference/Email_Notif_Preference";
import LoginInfoTab from "@/components/LoginInfo/LoginInfo";
import SocialAccountsTab from "@/components/SocialAccounts/SocialAccounts";
import ProfileVisibilitySettings from "@/components/ProfileVisibility/ProfileVisibility";
import ExportDataTab from "@/components/ExportData/ExportData";
import DeleteAccountTab from "@/components/DeleteAccount/DeleteAccount";


export default function ProfileSettings() {
  // username and name details form
  const form = useForm({
    resolver: zodResolver(profileDetailsSchema),
    defaultValues: {
      name: "",
      username: "",
    },
  });

  const onSubmit = (data: z.infer<typeof profileDetailsSchema>) => {
    console.log(data);
  };

  return (
    <div className="settings-container container mx-auto space-y-8">
      {/* TABS */}
      <Tabs defaultValue="profile" className="">
        {/* HEADER */}
        <Card className="settings-header shadow-none border-none p-8 flex flex-col gap-2">
          <CardTitle className="text-5xl font-normal mb-6">
            Account Settings
          </CardTitle>
          <CardDescription>
            You can change your account details here seamlessly
          </CardDescription>
        </Card>

        {/* TAB LIST */}
        <TabsList className="tabs-list p-8 w-full">
          <TabsTrigger className="rounded-none tabs-trigger" value="profile">
            Profile Info
          </TabsTrigger>

          <TabsTrigger className="rounded-none tabs-trigger" value="login">
            Login Info
          </TabsTrigger>

          <TabsTrigger
            className="rounded-none tabs-trigger"
            value="notification"
          >
            Notifications & Preferences
          </TabsTrigger>

          <TabsTrigger className="rounded-none tabs-trigger" value="social">
            Social Accounts
          </TabsTrigger>

          <TabsTrigger className="rounded-none tabs-trigger" value="privacy">
            Privacy
          </TabsTrigger>

          <TabsTrigger className="rounded-none tabs-trigger" value="export">
            Export Data
          </TabsTrigger>

          <TabsTrigger className="rounded-none tabs-trigger" value="delete">
            Delete Account
          </TabsTrigger>
         
        </TabsList>

        {/* TABS CONTENT */}
        {/* profile */}
        <TabsContent value="profile" className="w-full">
          <div className="profile-container w-full flex flex-col gap-8 mt-8">
            {/* PROFILE PICTURE */}
            <Card className="profile-picture px-4 py-8 grid gap-12">
              <CardHeader className="picture-label flex flex-col justify-center gap-1 p-0">
                <CardTitle className="font-bold">Profile Picture</CardTitle>
                <CardDescription>
                  Edit your profile picture. Your profile photo will be used on
                  your profile and throughout the site.
                </CardDescription>
              </CardHeader>

              <CardContent className="picture-edit flex items-center justify-center">
                <EditableProfilePic />
              </CardContent>
            </Card>

            {/* PROFILE DETAILS */}
            <Card className="profile-details px-4 py-8 grid gap-12">
              <CardHeader className="details-label flex flex-col justify-center gap-1 p-0">
                <CardTitle className="font-bold">Profile Details</CardTitle>
                <CardDescription>
                  Edit your name and username. Your profile name and username
                  will be used on your profile and throughout the site.
                </CardDescription>
              </CardHeader>

              <CardContent className="profile-form p-0 flex items-center justify-center">
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
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* login */}
        <TabsContent value="login">
          <LoginInfoTab />
        </TabsContent>

        {/* notification */}
        <TabsContent value="notification">
          <EmailNotificationPreferences />
        </TabsContent>

        {/* socials */}
        <TabsContent value="social">
          <SocialAccountsTab />
        </TabsContent>

        {/* privacy */}
        <TabsContent value="privacy">
          <ProfileVisibilitySettings />
        </TabsContent>

        {/* export */}
        <TabsContent value="export">
          <ExportDataTab />
        </TabsContent>

        {/* delete */}
        <TabsContent value="delete">
          <DeleteAccountTab />
        </TabsContent>

        
      </Tabs>
    </div>
  );
}
