"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea"
import { addUser, updateUser } from "@/lib/actions";


const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Must be a valid email.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    mobile: z.string().regex(/^[0-9]{10}$/, {
        message: "Mobile must be a 10-digit number.",
    }),
    address: z.string().min(5, {
        message: "Address must be at least 5 characters.",
    }),
    img: z.string().url({
        message: "Must be a valid URL.",
    }),
    isAdmin: z.boolean(),
});


const AddUser = () => {

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            mobile: "",
            address: "",
            img: "",
            isAdmin: false,
        },
    });

    function onSubmit(data) {
        console.log(data)
        addUser(data)
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="md:flex w-full md:space-x-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="md:w-1/2">
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter name" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="md:w-1/2">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter email" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    <div className="md:flex w-full md:space-x-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="md:w-1/2">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter password" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                                <FormItem className="md:w-1/2">
                                    <FormLabel>Mobile</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter number" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    <div className="w-full flex   justify-center  gap-4 ">
                        <FormField
                            control={form.control}
                            name="img"
                            render={({ field }) => (
                                <FormItem className="w-full md:w-1/2">
                                    <FormLabel>Profile</FormLabel>
                                    <FormControl>
                                        <Input placeholder="img url" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="w-full md:w-1/2">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Type your message here." {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                    </div>
                    <div className="md:flex w-full md:space-x-4">
                        <FormField
                            control={form.control}
                            name="isAdmin"
                            render={({ field }) => (
                                <FormItem className="md:w-1/2">
                                    <FormLabel>Is Admin?</FormLabel>
                                    <FormControl>
                                        <label className="inline-flex items-center">
                                            <input type="checkbox" {...field} />
                                            <span className="ml-2 text-gray-700">Grant admin privileges</span>
                                        </label>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}

export default AddUser










