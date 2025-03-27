"use client"
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Editor from '@toast-ui/editor'
import "@toast-ui/editor/dist/toastui-editor.css"
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function AddBlog() {
  const [editorValue, setEditorValue] = useState("Editor")
  const [title, setTitle] = useState("Title")
  const [description, setDescription] = useState("Description")
  const [slug, setSlug] = useState("Slug")
  useEffect(() => {
    const editor = new Editor({
      el: document.getElementById("editor"),
      initialEditType: "wysiwyg",
      height: "600px"
    })
    editor.on("change", () => {
      setEditorValue(editor.getMarkdown())
    })
    return () => {
      editor.destroy()
    }
  }, [])
  useEffect(() => {
    console.log(editorValue)
  }, [editorValue])
  const handleSubmit = async () => {
    const request_body = {
      title,
      slug,
      description,
      content: editorValue,
      updatedAt: new Date().toISOString()
    }
    const result = await fetch("/api/addblogs", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request_body)
    }).then(r => r.json()).then(({ data }) => {
      console.log(data)
      if (data.acknowledged) {
        toast("Blog Added Sucessfully")
      }
    }).catch(error => console.error('Error:', error));
  }
  return (
    <div className="mt-2 bg-white rounded-lg shadow-md p-2">
      <h1 className="text-3xl font-semibold text-center">Add Blog</h1>
      <form>
        <div className="p-2">
          <Label htmlFor="title" className="text-lg p-2">Blog Title</Label>
          <Input type="text" id="title" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
        </div>
        <div className="p-2">
          <Label htmlFor="slug" className="text-lg p-2">Blog Slug</Label>
          <Input type="text" id="slug" placeholder="Slug" value={slug} onChange={(e) => { setSlug(e.target.value) }} />
        </div>
        <div className="p-2">
          <Label htmlFor="description" className="text-lg p-2">Meta Description</Label>
          <Textarea type="text" id="description" placeholder="Meta Description" value={description}
           onChange={(e) =>  setDescription(e.target.value) } />
        </div>
        <div className="p-2">
          <Label htmlFor="content" className="text-lg p-2">Content</Label>
          <div id="editor" value={editorValue} onChange={(e) => setEditorValue(e.target.value)}>d</div>
        </div>
      </form>
      <Button variant="outline" className="mt-2 text-center" onClick={handleSubmit}>Add Blog</Button>
    </div>
  )
}