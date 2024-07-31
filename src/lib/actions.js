"use server"
import { revalidatePath } from "next/cache"
import { User } from "./models"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation"
import { signIn } from "@/app/auth"
import { AuthError } from "next-auth"
// import useAuthStore from "@/store"


// const setAuth = useAuthStore((state) => state.setAuth)
export const addUser = async (formdata) => {

    const { username, email, password, mobile, address, img, isAdmin } = formdata;
    try {
        connectToDB()
        const newUser = new User({ username, email, password, mobile, address, img, isAdmin })
        await newUser.save()
    } catch (error) {
        throw new Error("failed to add user")
    }
    revalidatePath("/dashboard")
    redirect("/dashboard")
}

export const deleteUser = async (id) => {
    try {
        connectToDB()
        await User.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("failed to delete user")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const updateUser = async (id, formdata) => {
    try {
        connectToDB()
        await User.findByIdAndUpdate(id, formdata)
    } catch (error) {
        throw new Error("failed to update user")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

// export const fetchSingleUser = async (id) => {
//     try {
//         connectToDB();
//         const user = await User.findById(id);
//         return user

//     } catch (error) {
//         throw new Error(error);
//     }
// };

export async function login(formdata) {
    console.log(formdata)
    const { username, password } = Object.fromEntries(formdata);
    console.log(username)
    await connectToDB();
    const userData = await User.findOne({ username });
    // setAuth(userData._doc)
    if (!userData || !userData.isAdmin) {
        throw new Error("Wrong credentials or user not found");
    }
    return userData._doc;
}


export async function authenticate(prevState, formData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}
