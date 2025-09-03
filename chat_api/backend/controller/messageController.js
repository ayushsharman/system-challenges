import express from 'express';
import { messages } from '../data/messageStore.js';
import { DateTime } from "luxon";

export const getMessage = (req, res) => {
    res.status(200).json(messages);
}


export const sendMessage = (req, res) => {
  const { senderId, receiverId, text } = req.body;
  console.log("received data")

  if (!text) {
    return res.status(400).json({ message: "No message text" });
  }


  const newMessage = {
    id: messages.length + 1, 
    senderId,
    receiverId,
    text,
    timestamp: DateTime.now().toISO(),
  };

  messages.push(newMessage);
  res.status(201).json(newMessage);
};

