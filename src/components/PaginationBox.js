"use client"
import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const PaginationBox = ({ count }) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const page = searchParams.get('page') || 1
    const params = new URLSearchParams(searchParams)
    const ITEM_PER_PAGE = 2

    const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

    const handlePageClick = (type) => {
        if (type === 'prev') {
            params.set('page', parseInt(page) - 1)
            replace(`${pathname}?${params}`)
        } else if (type === 'next') {
            params.set('page', parseInt(page) + 1)
            replace(`${pathname}?${params}`)
        }
    }
    return (
        <>





            <div className='w-full flex justify-between mt-4'>
                <button
                    className={`p-2 ${!hasPrev ? "bg-gray-400" : "bg-gray-700"} text-white `}
                    disabled={!hasPrev}
                    onClick={() => handlePageClick("prev")}
                >
                    Previous
                </button>


                <button
                    className={`px-6 py-2 ${!hasNext ? "bg-gray-400" : "bg-gray-700"} text-white `}
                    disabled={!hasNext}
                    onClick={() => handlePageClick("next")}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default PaginationBox