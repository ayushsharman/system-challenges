import express, { Router }  from 'express';
import * as notesController from '../controllers/notesController.js';

const router = Router();

router.get('/', (req, res) => {
    res.send("Hello world");
})

router.get('/notes', notesController.getNotes);
router.get('/notes/:id', notesController.getNotesbyId);
router.post('/notes', notesController.addNotes);
router.put('/notes/:id', notesController.putNotes);
router.delete('/notes/:id', notesController.deleteNotes);

export default router;

