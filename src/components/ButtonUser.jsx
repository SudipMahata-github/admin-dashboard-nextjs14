"use client"

import { deleteUser } from "@/lib/actions"
import { Button } from "./ui/button"
import Link from "next/link"

const ButtonUser = ({ userId }) => {
    return (
        <>
            <Link href={`/dashboard/users/${userId}`} className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                View
            </Link>
            <button onClick={() => { deleteUser(userId) }} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                Delete
            </button>
        </>
    )
}

export default ButtonUser