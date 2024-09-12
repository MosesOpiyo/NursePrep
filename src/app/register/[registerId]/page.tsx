"use client";

import React from "react";
import { pricingArray } from "@/assets/servicesData/services";
import Navbar from "@/components/Navbar/navbar";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import "../../../styles/globals.css";
import "./page.css";
import { FaPaperPlane } from "react-icons/fa6";
import { FaCcPaypal, FaCreditCard } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "../../../../schema";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const getSingleChoice = (registerId: any) => {
  const data = pricingArray[registerId];

  if (!data) {
    notFound();
  }

  return data;
};

export default function RegistrationForm({
  params,
}: {
  params: {
    registerId: string;
  };
}) {
  const choice = getSingleChoice(params.registerId);

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      paymentOption: "paypal",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    console.log(data);
  };

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
        <div className="choiceform-container p-4">
          <div className="choice-form flex flex-col gap-20 mx-auto">
            {/* NEED HELP */}
            <div className="help">
              <p className="text-end">
                Having problems?{" "}
                <Link href="/" className="text-blue-600">
                  Get Help
                </Link>
              </p>
            </div>

            {/* ALREADY A MEMBER? */}
            <div className="member flex text-center flex-wrap gap-4 items-center justify-center text-4xl font-extralight">
              <p>Already a member?</p>
              <Button>Sign In</Button>
            </div>

            {/* FORM */}
            <div className="form-container">
              <Form {...form}>
                <form
                  className="flex flex-col gap-12"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  {/* NAME, EMAIL, PASSWORD */}
                  <div className="flex flex-col gap-4 md:grid md:grid-cols-2 grid-rows-2">
                    {/* NAME */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              autoComplete="true"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="absolute -top-1 left-36" />
                        </FormItem>
                      )}
                    />

                    {/* EMAIL */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="johndoe@gmail.com"
                              autoComplete="true"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="absolute -top-1 left-36" />
                        </FormItem>
                      )}
                    />

                    {/* PASSWORD */}
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="enter password"
                              autoComplete="true"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="absolute -top-1 left-36" />
                        </FormItem>
                      )}
                    />

                    {/* CONFIRM PASSWORD */}
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="confirm password"
                              autoComplete="true"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="absolute -top-1 left-36" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* YOUR PAYMENT */}
                  <div className="payment-outline text-xl">
                    <p>Your payment is: ${choice.pricing}/{choice.period}</p>
                  </div>

                  {/* PAYMENT OPTION RADIO CHOICE */}
                  {/* RADIO GROUP */}
                  <div className="payment-radio">
                    <FormField
                      control={form.control}
                      name="paymentOption"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          {/* LABEL */}
                          <FormLabel className="text-4xl font-extralight">
                            Choose payment option:
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1 space-y-1"
                            >
                              {/* PAYPAL */}
                              <div className="paypal-radio rounded-xl px-4">
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="paypal" />
                                  </FormControl>

                                  <FormLabel className="font-normal flex items-center justify-between w-full gap-2">
                                    <span>Paypal</span>
                                    <FaCcPaypal />
                                  </FormLabel>
                                </FormItem>
                              </div>

                              {/* CREDIT CARD */}
                              <div className="credit-radio rounded-xl px-4">
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="credit_card" />
                                  </FormControl>

                                  <FormLabel className="font-normal flex items-center justify-between w-full gap-2">
                                    <span>Credit Card</span>
                                    <FaCreditCard />
                                  </FormLabel>
                                </FormItem>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* DISCLAIMER */}
                  <div className="disclaimer text-center">
                    <p>
                      By continuing, you acknowledge you&apos;ve read our
                      Privacy Policy and agree to Our Terms of Service
                    </p>
                  </div>

                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="event-footer">
        <Footer />
      </div>
    </>
  );
}
