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
import ProfilePage from "@/components/ProfileInfo/ProfileInfo";


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
        <TabsContent value="profile">
          <ProfilePage />
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
