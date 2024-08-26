'use client'
import React from 'react'
import { AlignJustify, Bell, Moon, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/redux'
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state'

const TopNavbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    )
    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }
    const isDarkMode = useAppSelector(
        (state) => state.global.isDarkMode
    )
    const toggleDarkMode = () => (
        dispatch(setIsDarkMode(!isDarkMode))
    )

    return (
        <div className='w-full bg-gray-100 '>
            <div className="flex items-center justify-between py-3 px-5">
                {/* LeftSide */}
                <div className="flex gap-3 md:gap-5 items-center">
                    <div className="">
                        <button
                            onClick={toggleSidebar}
                            className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
                        >
                            <AlignJustify className='w-4 h-4 text-gray-500' />
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            type="search"
                            name=""
                            placeholder='Search Group OR Products'
                            className='pl-10 py-4 w-50 md:w-80 border-2 border-gray-200 bg-white rounded-lg focus:outline-none focus:border-blue-500'
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Bell className='w-6 h-6 text-gray-500' />
                        </div>
                    </div>
                </div>

                {/* RightSide */}
                <div className="hidden md:flex gap-3 md:gap-5 items-center justify-between">
                    <div className="">
                        <button onClick={toggleDarkMode}>
                            {isDarkMode ? (
                                <Sun className="cursor-pointer text-gray-500" size={24} />
                            ) : (
                                <Moon className="cursor-pointer text-gray-500" size={24} />
                            )}
                        </button>
                    </div>
                    <div className="relative">
                        <Bell className='w-6 h-6 text-gray-500 cursor-pointer' />
                        <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
                            3
                        </span>
                    </div>
                    <hr className='w-0 h-8 border border-solid border-l border-gray-300 mx-3' />
                    <div className="flex items-center gap-3 cursor-pointer text-gray-900">
                        <div className="w-9 h-9">
                            image
                        </div>
                        <div className="font-semibold">
                            Ezaz Ahmed
                        </div>
                    </div>
                    <Link href='/settings'>
                        <Settings className='text-gray-500 cursor-pointer' size={24} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar