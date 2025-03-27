import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function PUT(request, context) {
  try {
    const {params}=await context
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
    }

    const newData = await request.json();

    const client = await clientPromise;
    const db = client.db("ecommerce");
    const collection = db.collection('blogs');

    console.log('MongoDB Test :-', newData);

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: newData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Blog updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }

}