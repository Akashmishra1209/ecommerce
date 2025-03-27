"use client"
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/getblogs')
            .then(response => response.json())
            .then((data) => {
                console.log("Fetched Blogs:", data);
                setBlogs(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
        <div className="flex justify-between">
            <div className="flex justify-center mb-4">
                <h1 className="text-3xl font-semibold text-center">All Blogs</h1>
            </div>
            <div className="flex justify-end mb-4">
                <Button variant="outline">
                    <Link href="/admin/blogs/add">Add Blog</Link>
                </Button>
            </div>
            </div>
            <div className="mt-2 rounded-lg shadow-md border">
                <Table>
                    <TableCaption>All Blogs</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[10px]">S.No.</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan="4" className="text-center py-4">
                                    <Loader2 className="animate-spin mx-auto" />
                                    <p>Loading blogs...</p>
                                </TableCell>
                            </TableRow>
                        ) : blogs.data.length > 0 ? (
                            blogs.data.map((blog, index) => (
                                <TableRow key={blog._id}>
                                    <TableCell className="font-medium">{index + 1}</TableCell>
                                    <TableCell>{blog.title}</TableCell>
                                    <TableCell>{blog.slug}</TableCell>
                                    <TableCell className="text-right flex gap-1">
                                        <Button variant="outline" size="sm">Edit</Button>
                                        <Button variant="destructive" size="sm">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan="4" className="text-center text-gray-500 py-4">
                                    No blogs found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}