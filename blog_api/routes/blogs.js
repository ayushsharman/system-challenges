import express, { Router } from 'express';


const router = Router();
router.get('/', (req, res) => {
    res.send("Hello World");
})


router.get('/blogs', blogsController.getBlogs);
router.get('/blogs/:id', blogsController.getBlogsbyId);
router.post('/blogs', blogsController.addBlogs);
router.put('/notes/:id', blogsController.editBlog);
router.delete('/notes/:id', blogsController.deleteBlogs);