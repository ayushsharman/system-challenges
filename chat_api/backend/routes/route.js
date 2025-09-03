import express, { Router } from 'express';
import * as messageController from '../controller/messageController.js'

const router = Router();

router.get('/', (req, res) => {
    res.send("Hello World");
})

router.get('/message',messageController.getMessage);
router.post('/message',messageController.sendMessage);

export default router;

