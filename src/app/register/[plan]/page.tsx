"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React from "react";
import { pricingArray } from "@/assets/servicesData/services";
import Navbar from "@/components/Navbar/navbar";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import "../../../styles/globals.css";
import "./page.css";
import { FaPaperPlane } from "react-icons/fa6";
import { FaCcPaypal, FaCreditCard } from "react-icons/fa6";
import { RegisterSchema } from "../../../../schema";
import { Label } from "@/components/ui/label";
import { useRouter, useParams } from "next/navigation"; // Use useParams for dynamic routes

const signUpSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
    paymentMethod: z.enum(["paypal", "creditCard"], {
      required_error: "Please select a payment method.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const params = useParams(); // Use useParams to get dynamic route parameter

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      paymentMethod: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    setIsSubmitting(true);
    // Here you would typically send the form data to your backend
    console.log(values);
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle successful submission (e.g., redirect to dashboard)
      router.push("/dashboard");
    }, 2000);
  }

  // Dynamically determine the plan details
  const planDetails =
    params.plan === "monthly"
      ? { name: "Monthly Plan", price: "$29/month" }
      : { name: "Three-Month Plan", price: "$75 for 3 months" };

  console.log("params.plan:", params.plan);

  return (
    <>
      {/* NAVBAR */}
      <div className="registry-navbar">
        <Navbar />
      </div>

      {/* INDIVIDUAL CHOICE CONTENT */}
      <div className="choice-container md:grid">
        {/* SIDEBAR */}
        <div className="sidebar py-16 px-4 hidden md:flex flex-col justify-between">
          <div className="sidebar-header flex flex-col gap-4">
            <h2 className="md:text-4xl">
              A few clicks away from passing your entrance exam.
            </h2>
            <p>Complete the details.</p>
          </div>

          <div className="sidebar-icon">
            <FaPaperPlane className="text-7xl" />
          </div>
        </div>

        {/* FORM */}
        <div className="container mx-auto p-4">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Create your account</CardTitle>
              <CardDescription>
                Sign up to get started with our service.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="********"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOffIcon className="h-4 w-4" />
                              ) : (
                                <EyeIcon className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="********"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeOffIcon className="h-4 w-4" />
                              ) : (
                                <EyeIcon className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Alert>
                    <InfoCircledIcon className="h-4 w-4" />
                    <AlertTitle>Selected Plan</AlertTitle>
                    <AlertDescription>
                      {planDetails.name} ({planDetails.price})
                    </AlertDescription>
                  </Alert>
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Payment Method</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            
                            {/* PAYPAL RADIO BUTTON */}
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="paypal" />
                              </FormControl>

                              {/* LABEL */}
                              <FormLabel className="font-normal flex flex-row-reverse items-center gap-2">
                                PayPal
                                <FaCcPaypal className="text-4xl"/>
                              </FormLabel>

                            </FormItem>

                            {/* CREDIT CARD RADIO BUTTON */}
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="creditCard" />
                              </FormControl>

                              {/* LABEL */}
                              <FormLabel className="font-normal flex flex-row-reverse items-center gap-2">
                                Credit Card
                                <FaCreditCard className="text-4xl" />
                              </FormLabel>

                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <p className="text-sm text-gray-500">
                    By continuing, you acknowledge you&apos;ve read our{" "}
                    <Link href="/privacy-policy" className="underline">
                      Privacy Policy
                    </Link>{" "}
                    and agree to our{" "}
                    <Link href="/terms-of-service" className="underline">
                      Terms of Service
                    </Link>
                    .
                  </p>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-2">
              <Button variant="link" asChild>
                <Link href="/help">Need help signing up?</Link>
              </Button>
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Button variant="link" asChild className="p-0">
                  <Link href="/signin">Sign in</Link>
                </Button>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* FOOTER */}
      <div className="event-footer">
        <Footer />
      </div>
    </>
  );
}
