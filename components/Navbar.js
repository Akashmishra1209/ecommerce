"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    if (pathname.startsWith("/admin")) {
        return null
    }
    return (
        <div>
            <nav className=" ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowra">{process.env.NEXT_PUBLIC_APP_NAME}</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3 rounded-sm md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 rounded-sm md:border-0 md:p-0">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 rounded-sm md:border-0 md:p-0">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 rounded-sm md:border-0 md:p-0">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 rounded-sm md:border-0 md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}