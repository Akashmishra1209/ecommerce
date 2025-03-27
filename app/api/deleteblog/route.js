import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(params) {
    try {
        const requestdata = await params.json();
        console.log("Received Data: ", requestdata);

        const client = await clientPromise;
        const db = client.db('ecommerce');
        const blogsCollection = db.collection('blogs');

        const result = await blogsCollection.insertOne(requestdata);

        if (!result.acknowledged) {
            throw new Error("Failed To Delete blog post.");
        }

        return NextResponse.json({ success: true, data: result }, { status: 201 });

    } catch (error) {
        console.error("Error creating blog:", error); // Log the error on the server
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}