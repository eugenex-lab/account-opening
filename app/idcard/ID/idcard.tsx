"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  document: z.string().min(2, {
    message: "Please select type of document ",
  }),
  upload: z.string().min(2, {
    message: "Please upload selected document",
  }),
  otp: z.string().min(2, {
    message: "Please input the otp sent to you",
  }),
});

export default function IdCardForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      document: "",
      upload: "",
      otp: "",
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
        <div className="py-6 md:py-11 p-6 relative border-[#161822] bg-[#161822]/50 rounded-2xl md:rounded-r-2xl md:rounded-l-none w-full  z-20">
          <div className="absolute inset-0 backdrop-blur-sm bg-[#161822]/90 -z-10 rounded-2xl md:rounded-r-2xl md:rounded-l-none"></div>
          <div>
            <h1 className="text-xl md:text-2xl text-[#F5F5F5] tracking-wide">
              Choose Preferred ID
            </h1>
            <p className="text-sm md:text-base text-[#7A7C86] tracking-wide">
              Fill in your BVN for quick data retrieval
            </p>
          </div>

          <div className="mt-14">
            <Form {...form}>
              <form>
                <FormField
                  control={form.control}
                  name="document"
                  render={({ field }) => (
                    <FormItem className="pb-2 text-[#989AA4] text-sm">
                      <FormLabel>Select the type of Documents</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full bg-[#313241] border-[#313241] text-[#F5F5F5]">
                          <SelectValue
                            placeholder="Passport"
                            className="placeholder:text-[#F5F5F5]"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-[#313241]">
                          <SelectGroup>
                            {/* <SelectLabel>North America</SelectLabel> */}
                            <SelectItem value="est">PassPort</SelectItem>
                            <SelectItem value="cst">Drivers License</SelectItem>
                            <SelectItem value="mst">
                              National IDcard / NIN
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <p className="mt-6 pb-2 text-[#989AA4] text-sm">
                  Upload your Document
                </p>
                <div className="flex items-center justify-center w-full ">
                  <label className="flex flex-col rounded-lg border-2 border-[#636678] border-dashed w-full h-20 p-10 group text-center">
                    <div className="h-full w-full text-center flex justify-center items-center gap-2">
                      <Image
                        src="https://res.cloudinary.com/dan4b75j7/image/upload/v1716472664/wealth_app/Group_nek3v3.png"
                        width={20}
                        height={20}
                        alt="icon"
                      />
                      <p className="cursor-pointer text-[#313241] text-base">
                        Click to upload your document
                      </p>
                    </div>
                    <input type="file" className="hidden"></input>
                  </label>
                </div>
              </form>
            </Form>

            <div className="flex justify-end mt-56 md:mt-40">
              <Link href={"/idcardconfirmation"}>
                <Button
                  type="submit"
                  className="bg-[#C5C58F] h-12 text-base text-[#161822] md:text-lg w-48 hover:bg-[#F5F5F5]"
                >
                  <span className="block md:hidden">Continue</span>
                  <span className="hidden md:block">Verify</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
