import express from 'express';
const router = express.Router();
import {getNotes, createNote, getNote, updateNote, deleteNote} from '../controllers/noteController.js';
import auth from '../midlleware/auth.js';


router.route('/').get(auth, getNotes).post(auth,createNote);
router.route('/:id').get(auth, getNote).put(auth, updateNote).delete(auth, deleteNote);

export default router;