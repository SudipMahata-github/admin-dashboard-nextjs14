'use client'
import React from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from "use-debounce"
const SearchBox = ({ placeholder }) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()



    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams)

        params.set('page', 1)
        if (e.target.value && e.target.value.length > 2) {
            params.set("q", e.target.value)
        } else {
            params.delete("q")
        }
        replace(`${pathname}?${params}`)
    }, 400)

    return (
        <>
            <div className="w-full ">
                <form>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            onChange={handleSearch}
                            type="search"
                            placeholder="Search user"
                            className=" appearance-none bg-background pl-8 shadow-none  mt-4"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchBox