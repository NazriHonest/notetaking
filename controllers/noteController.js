import Note from '../models/noteModel.js';

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({
      user: req.user.userId,
      title,
      content,
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function getNotes(req, res) {
  try {
    const notes = await Note.find({ user: req.user.userId });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note || note.user.toString() !== req.user.userId) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    let note = await Note.findById(req.params.id);
    if (!note || note.user.toString() !== req.user.userId) {
      return res.status(404).json({ message: 'Note not found' });
    }
    note.title = title || note.title;
    note.content = content || note.content;
    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteNote(req, res) {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note || note.user.toString() !== req.user.userId) {
      return res.status(404).json({ message: 'Note not found' });
    }
    
    res.json({ message: 'Note removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}