import { Calendar, ContactRound, Home, Inbox, LayoutDashboard, LogOutIcon, NewspaperIcon, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Blogs",
    url: "/admin/blogs",
    icon: NewspaperIcon,
  },
  {
    title: "Contacts",
    url: "/admin/contacts",
    icon: ContactRound,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export default function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl font-semibold">{process.env.NEXT_PUBLIC_APP_NAME}</SidebarGroupLabel>
          <SidebarGroupContent className="mt-5">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="">
                    <a href={item.url} className="">
                      <span className="text-xl flex items-center justify-between space-x-2 gap-2">
                      <item.icon/>
                        {item.title}

                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarGroup className="relative bottom-0">
        <Button variant="outline" className="font-semibold w-[75%]"><LogOutIcon/>Logout</Button>
      </SidebarGroup>
    </Sidebar>
  )
}