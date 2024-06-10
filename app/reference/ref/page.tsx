"use client";

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const phoneNumberSchema = z.string().refine(
  (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    return phoneNumber?.isValid();
  },
  {
    message:
      "Please input a valid phone number with the appropriate country code",
  }
);

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Please input your title",
  }),
  address: z.string().min(2, {
    message: "Please input your Home Address",
  }),
  email: z.string().email({
    message: "Please type in your email address",
  }),
  otp: z.string().min(2, {
    message: "Please input the otp sent to you",
  }),
  phoneNumber: phoneNumberSchema,
});

export default function RefInfo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      address: "",
      email: "",
      otp: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <section className="h-full">
        <div className="px-6 pb-7 md:pb-0">
          <Image
            src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715953681/wealth_app/SkT_1_bea8vp.svg"
            width={50}
            height={50}
            alt="sankore logo"
            className="md:hidden"
          />
        </div>
        <div className="py-6 p-6 relative border-[#161822] bg-[#161822]/50 rounded-2xl md:rounded-r-2xl md:rounded-l-none w-full z-20">
          <div className="absolute inset-0 backdrop-blur-lg bg-[#161822]/90 -z-10 rounded-2xl md:rounded-r-2xl md:rounded-l-none"></div>
          <div>
            <h1 className="text-xl md:text-2xl text-[#F5F5F5] tracking-wide">
              Enter Reference Information
            </h1>
            <p className="text-sm md:text-base text-[#7A7C86] tracking-wide">
              Fill in your additional data
            </p>
          </div>
          <Form {...form}>
            <div className="flex flex-col h-full">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 flex flex-col flex-grow"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="mt-14 md:h-[70px]">
                      <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                        Title{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#313241] border-[#313241] placeholder:text-[#F5F5F5] h-[40px]"
                          placeholder="Dr."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="md:h-[70px]">
                      <FormLabel className="text-[#989AA4] flex justify-between items-center pl-2 tracking-wide">
                        <p className="text-sm md:text-base">Phone Number</p>
                        <div className="flex items-center gap-2">
                          <p className="text-xs">WhatsApp Enabled</p>
                          <Image
                            src="https://res.cloudinary.com/dan4b75j7/image/upload/v1716293659/wealth_app/info-circle_g5b1ef.png"
                            width={22}
                            height={22}
                            alt="back logo"
                          />
                        </div>
                      </FormLabel>

                      <FormControl className="flex gap-2 h-auto">
                        <div>
                          <PhoneInput
                            country={"ng"}
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            containerStyle={{ width: "100%", height: "100%" }}
                            inputStyle={{
                              width: "100%",
                              backgroundColor: "#313241",
                              borderColor: "#313241",
                              color: "#F5F5F5",
                              height: "40px",
                            }}
                            buttonStyle={{
                              backgroundColor: "#313241",
                              borderColor: "#313241",
                              height: "100%",
                            }}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="md:h-[70px]">
                      <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                        Email Address{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#313241] border-[#313241] placeholder:text-[#F5F5F5] h-[40px]"
                          placeholder="kelvin@savannah.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className=" md:h-[70px]">
                      <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                        Home Address{" "}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-[#313241] border-[#313241] placeholder:text-[#F5F5F5] h-[40px]"
                          placeholder="No. 365, Name of Street, LGA, Cross River, Country"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-16 flex gap-16 items-center justify-between">
                  <Link
                    href="/idcardconfirmation"
                    className="flex gap-2 items-center text-sm md:text-base text-[#989AA4]"
                  >
                    <Image
                      src="https://res.cloudinary.com/dan4b75j7/image/upload/v1716198192/wealth_app/arrow-left_i7oybt.png"
                      width={32}
                      height={32}
                      alt="back logo"
                    />
                    back
                  </Link>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        type="submit"
                        className="bg-[#C5C58F] h-14 text-base text-[#161822] md:text-lg w-40 hover:bg-[#F5F5F5]"
                      >
                        Submit
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px] bg-[#161822] border-[#161822] ">
                      <DialogClose asChild>
                        <div className="hidden md:block">
                          <Button
                            type="button"
                            variant="outline"
                            className="bg-[#E6E7E8] float-right rounded-xl"
                          >
                            Close <span className="text-black ml-1">X</span>
                          </Button>
                        </div>
                      </DialogClose>

                      <div className="modal-header relative bg-[#161822] w-full h-20">
                        <Image
                          src="https://res.cloudinary.com/dan4b75j7/image/upload/v1716476106/wealth_app/SankoreMosaic2_1_c4g8ct.png"
                          alt="modal-img"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t"
                        />
                      </div>

                      <div className="modal-body p-5 w-full h-full">
                        <div>
                          <p className="text-[#F5F5F5] text-xl md:text-2xl">
                            {" "}
                            Enter OTP
                          </p>
                          <p className="text-[#7A7C86] text-sm md:text-base">
                            Secure and confirm your Identity with OTP
                          </p>
                        </div>

                        <Form {...form}>
                          <div className="flex flex-col h-full">
                            <form
                              onSubmit={form.handleSubmit(onSubmit)}
                              className="space-y-8 flex flex-col flex-grow"
                            >
                              <FormField
                                control={form.control}
                                name="otp"
                                render={({ field }) => (
                                  <FormItem className="mt-16 md:h-[70px]">
                                    <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                                      OTP{" "}
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        className="bg-[#313241] border-[#313241] placeholder:text-[#F5F5F5] h-[40px]"
                                        {...field}
                                      />
                                    </FormControl>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <p className="text-[#7A7C86] text-sm text-center">
                                We have sent an OTP to your number via Whatsapp
                                07*******32
                              </p>
                            </form>
                          </div>
                        </Form>
                      </div>

                      <DialogFooter>
                        <div className="px-4 py-3 pt-5 w-full flex flex-col items-center gap-3 md:flex-row md:justify-end">
                          <div className="w-full md:w-auto">
                            <Link href={"/set"}>
                              <Button
                                type="submit"
                                className="bg-[#C5C58F] h-14 text-base text-[#161822] w-full md:w-40 md:text-lg hover:bg-[#F5F5F5]"
                              >
                                Verify
                              </Button>
                            </Link>
                          </div>

                          <div className="w-full md:hidden">
                            <DialogClose asChild>
                              <Button
                                type="submit"
                                className="h-14 text-base text-[#dadce4] md:text-lg w-full"
                              >
                                Cancel
                              </Button>
                            </DialogClose>
                          </div>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </form>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
