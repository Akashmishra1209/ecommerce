import React from 'react'
import { Button } from './ui/button'

export default function HeroSection() {
    const app_name =process.env.NEXT_PUBLIC_APP_NAME
    return (
        <div>
            <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Welcome To {app_name}</h1>
                        <p className="mb-8 leading-6">Whether you’re a tech enthusiast, a student, or just someone curious about the digital world, we’ve got you covered. Explore the latest breakthroughs, stay ahead of trends, and dive into the world of technology—all in one place. Stay curious, stay updated with {app_name}! 🚀</p>
                        <div className="flex justify-center">
                            <Button className="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">Button</Button>
                            <Button className="ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">Button</Button>
                        </div>
                    </div>
            </div>
        </div>
    )
}