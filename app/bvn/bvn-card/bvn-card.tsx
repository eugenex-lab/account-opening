"use client";

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  bvn: z.preprocess(
    (value) => {
      if (typeof value === "string" && value.trim() === "") {
        return undefined; // Convert empty string to undefined for initial state
      }
      return value; // Return the value as is for further validation
    },
    z.union([
      z.string().length(11, { message: "BVN must be exactly 11 digits" }), // Validates 11-digit string
      z.number().refine((value) => value.toString().length === 11, {
        message: "BVN must be exactly 11 digits",
      }), // Validates 11-digit number
    ])
  ),
  otp: z.string().min(2, {
    message: "Please input the otp sent to you",
  }),
});

export default function BvnCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bvn: "",
      otp: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="h-full">
        <div className="md:hidden px-6 py-6 md:pb-0">
          <Image
            src="https://res.cloudinary.com/dan4b75j7/image/upload/v1715953681/wealth_app/SkT_1_bea8vp.svg"
            width={50}
            height={50}
            alt="sankore logo"
          />
        </div>
        <div className="py-6 md:py-11 p-6 relative border-[#161822] bg-[#161822]/50 rounded-2xl md:rounded-r-2xl md:rounded-l-none w-full z-20">
          <div className="absolute inset-0 backdrop-blur-sm bg-[#161822]/90 -z-10 rounded-2xl md:rounded-r-2xl md:rounded-l-none"></div>
          <div>
            <h1 className="text-xl md:text-2xl text-[#F5F5F5] tracking-wide">
              Enter your BVN
            </h1>
            <p className="text-sm md:text-base text-[#7A7C86] tracking-wide">
              Fill in your BVN for quick data retrieval
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
                  name="bvn"
                  render={({ field }) => (
                    <FormItem className="mt-16 h-[72px]">
                      <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                        Bank Verification Number{" "}
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

                <div className="mt-auto flex gap-16 items-center justify-between pt-72">
                  <Link
                    href="/signup"
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

                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
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
                                    <FormItem className="mt-16 h-[72px]">
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
                                  We have sent an OTP to your number via
                                  Whatsapp 07*******32
                                </p>
                              </form>
                            </div>
                          </Form>
                        </div>

                        <DialogFooter>
                          <div className="px-4 py-3 pt-5 w-full flex flex-col items-center gap-3 md:flex-row md:justify-end">
                            <div className="w-full md:w-auto">
                              <Link href={"/confirmation"}>
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
                </div>
                {/* </Link> */}
              </form>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
