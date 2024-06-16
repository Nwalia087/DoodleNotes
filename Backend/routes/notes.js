const express = require("express");
const router = express.Router();
const Note = require("../models/notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//fetching all notes from the user
router.get("/fetch-all-notes", fetchuser, async (req, res) => {
  try {
    console.log("Fetching notes for user ID:", req.user.id);
    const notes = await Note.find({ user: req.user.id });
    console.log("Notes found:", notes);
    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error.message);
    res.status(500).send("Internal server error");
  }
});

//adding notes from the user
router.post(
  "/add-notes",
  fetchuser,
  [
    body("title", "enter a valid title").isLength({ min: 1 }),
    body("description", "description must be 5 characters long").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, tag } = req.body;
    try {
      const note = new Note({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);

//updating notes from the user
router.put(
  "/update-notes/:id",
  fetchuser,
  [body("description", "description must be 5 characters long").isLength({ min: 5 })], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, tag } = req.body;
    try {
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }
      // for finding out id of note
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("not found");
      }
      //for finding out if user is acceesing his notes only
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("unauthorised access");
      }
      note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
      res.json(note);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);
router.delete(
  "/delete-notes/:id",
  fetchuser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //for finding if the note exists
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("not found");
      }
      //for finding out if user is acceesing his notes only
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("unauthorised access");
      }
      note = await Note.findByIdAndDelete(req.params.id);
      console.log(note)
      res.json(note);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);

module.exports = router;
