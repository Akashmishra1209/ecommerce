import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { ModeToggle } from '../ModeToggle'

export default function Header() {
  return (
    <nav className="p-2 flex flex-row border-b">
      <SidebarTrigger className="m-2"/>
      <h1 className="text-3xl text-center">Welcome To Dashboard</h1>
      <ModeToggle className="relative right-0"/>
    </nav>
  )
}