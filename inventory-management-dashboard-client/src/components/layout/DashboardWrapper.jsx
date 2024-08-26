"use client"
import React, { useEffect } from 'react'
import Sidebar from '../common/Sidebar'
import TopNavbar from '../common/TopNavbar'
import StoreProvider, { useAppSelector } from '@/redux'

const DashboardLayout = ({ children }) => {
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    )

    const isDarkMode = useAppSelector(
        (state) => state.global.isDarkMode
    )

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('light')
        }
    })

    return (
        <div>
            <div className={`fixed flex w-full min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
                <Sidebar />
                <main className={`flex flex-col w-full h-full bg-gray-50 ${
                    isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
                }`}>
                    <TopNavbar />
                    {children}
                </main>
            </div>
        </div>
    )
}

const DashboardWrapper = ({ children }) => {
    return (
        <StoreProvider>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </StoreProvider>
    )
}

export default DashboardWrapper