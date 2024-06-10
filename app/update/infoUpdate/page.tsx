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
import { Input } from "@/components/ui/input";
import Link from "next/link";
import "react-phone-input-2/lib/style.css";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const dateString = z
  .string()
  .refine(
    (val) => {
      const date = new Date(val);
      return !isNaN(date.getTime());
    },
    {
      message: "Invalid date format",
    }
  )
  .transform((val) => new Date(val));

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Please input your first name",
  }),
  lastName: z.string().min(2, {
    message: "Please input your last name",
  }),
  idNumber: z.string().min(10, {
    message: "Type in your ID",
  }),
  issueDate: z.date({
    required_error: "Please input the issue date",
    invalid_type_error: "Issue date must be a valid date",
  }),
  expiryDate: z.date({
    required_error: "Please input the expiry date",
    invalid_type_error: "Expiry date must be a valid date",
  }),
  issueAuthority: z.string().min(6, {
    message: "Please input issue Authority",
  }),
});

export default function InfoUpdate() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      idNumber: "",
      issueDate: new Date(),
      expiryDate: new Date(),
      issueAuthority: "",
    },
  });

  const [issueDate, setIssueDate] = useState<Date>();
  const [expiryDate, setExpiryDate] = useState<Date>();

  const countryCode = "+234";

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

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
            unoptimized
          />
        </div>
        <div className="py-6 px-6 relative border-[#161822] bg-[#161822]/50 rounded-2xl md:rounded-r-2xl md:rounded-l-none w-full z-20">
          <div className="absolute inset-0 backdrop-blur-lg bg-[#161822]/90 -z-10 rounded-2xl md:rounded-r-2xl md:rounded-l-none"></div>
          <div>
            <h1 className="text-xl md:text-2xl text-[#F5F5F5] tracking-wide">
              Update your Information
            </h1>
            <p className="text-sm md:text-base text-[#7A7C86] tracking-wide">
              Make corrections to scanned data
            </p>
          </div>
          <div className="mt-14">
            <Form {...form}>
              <div className="flex flex-col h-full">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 flex flex-col flex-grow"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className=" ">
                        <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                          First Name{" "}
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-[#313241] border-[#313241] placeholder:text-[#F5F5F5] h-[40px]"
                            placeholder="Kelvin"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className=" ">
                        <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                          Last Name{" "}
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-[#313241] border-[#313241] placeholder:text-[#F5F5F5] h-[40px]"
                            placeholder="Ogbowure"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="idNumber"
                    render={({ field }) => (
                      <FormItem className=" ">
                        <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                          ID Number{" "}
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-[#313241] border-[#313241] placeholder:text-[#F5F5F5] h-[40px]"
                            placeholder="5601321131"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex w-full gap-6">
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="issueDate"
                        render={({ field }) => (
                          <FormItem className=" ">
                            <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                              Issue Date{" "}
                            </FormLabel>
                            <FormControl>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full justify-start text-left font-normal border-[#313241] bg-[#313241] text-[#F5F5F5]",
                                      !issueDate && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4 " />
                                    {issueDate ? (
                                      format(issueDate, "PPP")
                                    ) : (
                                      <span className="text-[#F5F5F5]">
                                        Pick a date
                                      </span>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={issueDate}
                                    onSelect={setIssueDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({ field }) => (
                          <FormItem className=" ">
                            <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                              Expiry Date{" "}
                            </FormLabel>
                            <FormControl>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full justify-start text-left font-normal bg-[#313241] border-[#313241] text-[#F5F5F5]",
                                      !expiryDate && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {expiryDate ? (
                                      format(expiryDate, "PPP")
                                    ) : (
                                      <span className="text-[#F5F5F5]">
                                        Pick a date
                                      </span>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={expiryDate}
                                    onSelect={setExpiryDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="issueAuthority"
                    render={({ field }) => (
                      <FormItem className=" ">
                        <FormLabel className="text-sm md:text-base text-[#989AA4] pl-2 tracking-wide">
                          Issuing Authority{" "}
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="bg-[#313241] border-[#313241] placeholder:text-[#F5F5F5] h-[40px]"
                            placeholder="Abuja"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="mt-auto flex gap-16 items-center justify-between">
                    <Link
                      href="/idcardconfirmation"
                      className="flex gap-2 items-center text-sm md:text-base text-[#989AA4]"
                    >
                      <Image
                        src="https://res.cloudinary.com/dan4b75j7/image/upload/v1716198192/wealth_app/arrow-left_i7oybt.png"
                        width={32}
                        height={32}
                        alt="back logo"
                        unoptimized
                      />
                      back
                    </Link>

                    {/* <Link> */}
                    <Button
                      type="submit"
                      className="bg-[#C5C58F] h-14 text-base text-[#161822] md:text-lg w-40 hover:bg-[#F5F5F5]"
                    >
                      Save
                    </Button>
                    {/* </Link> */}

                    {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
                  </div>
                </form>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
