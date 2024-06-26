import express from 'express';
const router = express.Router();
import {register, login, getUser, getUsers} from '../controllers/userController.js';
import auth from '../midlleware/auth.js';

//router.post('/register', userController.reg);
router.route('/').get(getUsers).post(register);
router.route('/login').post(login);
router.route('/me').get(auth, getUser);

export default router;