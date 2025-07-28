import express from 'express';
import { notes } from '../data/notesStore.js';


export const getNotes = (req, res) => {
    res.status(200).json(notes);
}

export const getNotesbyId = (req, res) => {
    const { id } = req.params;

    const note = notes.find(note => note.id == id);

    if (!note) {
        res.status(404).json({
            message: "Note doesn't exist"
        })
    }

    res.status(200).send(note);
}


export const addNotes = (req, res) => {
    const notesData = req.body;
    const { title, content } = notesData;

    if (!title || !content) {
        res.status(400).json({
            message: "missing content"
        })
    }

    const id = Date.now().toString();

    const newNote = { id, title, content };
    notes.push(newNote);

    res.status(201).json(newNote);

}


export const putNotes = (req, res) => {
    const { id } = req.params;
    const note = notes.find(note => note.id == id);

    if (!note) {
        res.status(404).json({
            message: "Note doesn't exist"
        })
    }

    const { title, content } = req.body;

    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;

    res.json(note);
}

export const deleteNotes = (req, res) => {
    const { id } = req.params;
    const index = notes.findIndex(note => note.id == id)

    if (index == -1) {
        res.status(404).json({
            message: "Note doesn't exist"
        })
    }

    notes.splice(index, 1);
    res.json({ success: true });
}