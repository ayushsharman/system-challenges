import express from 'express';
import { blogs } from '../data/blogsStore';


export const getBlogs = (req, res) => {
    res.status(200).json(blogs);
}

export const getBlogsbyId = (req, res) => {
    const { id } = req.params;

    const blog = blogs.find(blog => blog.id == id);

    if (!blog) {
        res.status(404).json({
            message: "Blog not found"
        })
    }

    res.status(200).json(blog);
}


export const addBlogs = (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        res.status(404).json({
            message: "Content Missing"
        })
    }

    const id = Date.now().toString();

    const newBlog = { id, title, content };
    blogs.push(newBlog);

    res.status(201).json(newBlog);
}

export const deleteBlogs = (req, res) => {
    const { id } = req.params;

    const index = blogs.findIndex(blog => blog.id == id);

    if (!index) {
        res.status(400).json({
            message: "Not found"
        })
    }

    blogs.splice(index, 1);
    res.json({ success: true });
}

export const editBlog = (req, res) => {
    const { id } = req.params;

    const blog = blogs.find(blog => blog.id == id);

    if(!id){
        res.status(404).json({
            message: "Not found"
        })
    }

    const {title, content} = req.body;

    if(title != undefined) blog.title = title;
    if(content != undefined) blog.content = content;

    res.json(blog);
}