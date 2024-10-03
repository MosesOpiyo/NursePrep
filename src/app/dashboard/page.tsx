"use client";

import Navbar from "../../components/Navbar/navbar";
import { Button } from "@/components/ui/button";
import "../../styles/globals.css";
import "./page.css";
import Hero from "@/components/Hero/Hero";
import Homepage from "@/components/Homepage/Homepage";
import Footer from "@/components/Footer/Footer";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/contexts/AuthContext";
import { FaArrowRightFromBracket, FaGear } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileClock, Wallet, UserRoundCog, Settings, LogOut } from "lucide-react";


const FormSchema = z.object({
  type: z.enum(["social_media", "my_school", "online_ads", "word", "search", "blog", "other"], {
    required_error: "You need to select a notification type.",
  }),
})

export default function Dashboard() {
  const router = useRouter()
  const { isLoggedIn, setIsLoggedIn } = useAuth()

  // PROGRESS TIMER
  const [progress, setProgress] = React.useState(13);
  const [progress1, setProgress1] = React.useState(20);
  const [progress2, setProgress2] = React.useState(25);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer1 = setTimeout(() => setProgress1(40), 500);
    return () => clearTimeout(timer1);
  }, []);

  React.useEffect(() => {
    const timer2 = setTimeout(() => setProgress2(80), 500);
    return () => clearTimeout(timer2);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    router.push('/')
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <>
      <div className="maindashboard-container flex flex-col gap-8">
        {/* WELCOME */}
        <Card className="welcome border-none shadow-none">
          <CardContent className="p-8">
            <div className="greeting flex flex-col gap-2">
              <h2 className="text-5xl font-normal">Hello, Isaac!</h2>
              <p className="flex flex-col">
                Welcome to your
                <span className="font-bold text-xl">Nurseprep Dashboard</span>
              </p>
              <q>Never stop learning, because life never stops teaching.</q>
            </div>
          </CardContent>
        </Card>

        {/* MY COURSES */}
        <Card className="mycourses-container p-8 flex flex-col gap-8">
          <CardTitle className="font-normal text-4xl">My Course Progress</CardTitle>
          <div className="mycourses-content grid grid-cols-3 grid-rows-1 gap-4">
            <Card className="course-card">
              <CardContent className="p-8 flex flex-col justify-between gap-4">
                <div className="course-name">
                  <p className="font-bold text-xl">Math</p>
                  <p>Principles of Multiplication</p>
                </div>
                <div className="course-progress flex flex-col gap-1">
                  <p>100hours - {progress}%</p>
                  <Progress value={progress} className="w-[60%]" />
                </div>
                <Button>Reset</Button>
              </CardContent>
            </Card>
            
            <Card className="course-card english">
              <CardContent className="p-8 flex flex-col justify-between gap-4">
                <div className="course-name">
                  <p className="font-bold text-xl">English</p>
                  <p>Principles of English</p>
                </div>
                <div className="course-progress flex flex-col gap-1">
                  <p>100hours - {progress1}%</p>
                  <Progress value={progress1} className="w-[60%]" />
                </div>
                <Button>Reset</Button>
              </CardContent>
            </Card>
            <Card className="course-card reading">
              <CardContent className="p-8 flex flex-col justify-between gap-4">
                <div className="course-name">
                  <p className="font-bold text-xl">Reading</p>
                  <p>Principles of Reading</p>
                </div>
                <div className="course-progress flex flex-col gap-1">
                  <p>100hours - {progress2}%</p>
                  <Progress value={progress2} className="w-[60%]" />
                </div>
                <Button>Reset</Button>
              </CardContent>
            </Card>
          </div>

          {/* ADD COURSES */}
          <div className="addcourses-container self-center">
            <Dialog>
              <DialogTrigger asChild className="bg-black text-white py-2 px-8">
                <Button>ADD COURSES</Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Choose courses</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="account" className="">
                  <TabsList className="grid w-full grid-cols-4 h-max">
                    <TabsTrigger value="hesi">HESI A2</TabsTrigger>
                    <TabsTrigger value="ati">ATI TEAS</TabsTrigger>
                    <TabsTrigger value="wonderlic">Wonderlic SLE</TabsTrigger>
                    <TabsTrigger value="nursing">Nursing School Essentials</TabsTrigger>
                  </TabsList>
                  <TabsContent value="hesi" className="grid grid-cols-3">
                    <Card className="add_course-card english">
                      <CardContent className="p-8 flex flex-col justify-between h-80">
                        <div className="course-title flex flex-col gap-4">
                          <h2 className="font-bold text-3xl">HESI</h2>
                        </div>
                        <div className="course-name">
                          <p className="font-bold text-xl">English</p>
                          <p>Principles of English</p>
                        </div>
                        <Button>Add Course</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="ati" className="grid grid-cols-3">
                    <Card className="add_course-card english">
                      <CardContent className="p-8 flex flex-col justify-between h-80">
                        <div className="course-title flex flex-col gap-4">
                          <h2 className="font-bold text-3xl">ATI TEAS</h2>
                        </div>
                        <div className="course-name">
                          <p className="font-bold text-xl">English</p>
                          <p>Principles of English</p>
                        </div>
                        <Button>Add Course</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="wonderlic" className="grid grid-cols-3">
                    <Card className="add_course-card english">
                      <CardContent className="p-8 flex flex-col justify-between h-80">
                        <div className="course-title flex flex-col gap-4">
                          <h2 className="font-bold text-3xl">Wonderlic SLE</h2>
                        </div>
                        <div className="course-name">
                          <p className="font-bold text-xl">English</p>
                          <p>Principles of English</p>
                        </div>
                        <Button>Add Course</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="nursing" className="grid grid-cols-3">
                    <Card className="add_course-card english">
                      <CardContent className="p-8 flex flex-col justify-between h-80">
                        <div className="course-title flex flex-col gap-4">
                          <h2 className="font-bold text-3xl">Nursing School</h2>
                        </div>
                        <div className="course-name">
                          <p className="font-bold text-xl">English</p>
                          <p>Principles of English</p>
                        </div>
                        <Button>Add Course</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        {/* INCOMING EVENTS */}
        <Card className="myevents-container">
          <CardContent className="p-8 flex flex-col gap-8">
            <CardTitle className="font-normal text-4xl">My Events</CardTitle>
            <div className="event-content h-72 grid grid-cols-3 w-full">
              <Card className="math-class flex items-end flex-col justify-end p-8 h-full text-white">
                <CardTitle className="text-4xl">Live Math Class</CardTitle>
                <CardDescription>4th October, 2025</CardDescription>
                <p>Learn Math basics with Alex!</p>
              </Card>
            </div>
            <div className="event_quick-links flex flex-col w-fit">
              <Link href="/nurseevent">View Upcoming Events</Link>
              <Link href="/nurseevent">View Past Events</Link>
            </div>
          </CardContent>
        </Card>

        {/* QUICK LINKS AND SURVEY */}
        <div className="links_survey grid grid-cols-2 gap-8">
          <Card className="links-container">
            <CardContent className="p-8 flex flex-col gap-8">
              <CardTitle className="font-normal text-4xl">Quick Links</CardTitle>
              <div className="qlinks-container flex w-full">
                <div className="qlinks-content">
                  <ul className="flex flex-col gap-1">
                    <li>
                      <Link href="/dashboard/test_history" className="flex gap-1 items-center">
                      <FileClock/>
                      My Test History
                      </Link>
                      </li>

                    <li>
                      <Link href="/dashboard/subscription" className="flex gap-1 items-center">
                      <Wallet />
                      Subscriptions & Billing</Link>
                      </li>
                      
                    <li>
                      <Link href="/dashboard/account_settings" className="flex items-center gap-1">
                        <Settings />
                        Account Settings
                      </Link>
                    </li>

                    <li>
                      <button type="button" onClick={handleLogout} className="flex gap-1 items-center">
                        <LogOut />
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SURVEY */}
          <Card className="survey-container">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-4xl font-normal">How did you hear about us?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="social_media" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Social Media (Facebook, Reddit, TikTok etc.)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="my_school" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                From My School
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="online_ads" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Online Ads (Google Ads, Facebook Ads etc.)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="word" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Word of Mouth (e.g., Friends, Family)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="search" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Search Engine (e.g., Google, Bing)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="blog" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Blog or Online Article
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="other" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Other
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}