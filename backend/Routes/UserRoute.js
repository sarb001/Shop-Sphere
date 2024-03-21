
import experss  from 'express';
import { LoginUser, RegisterUser } from '../Controllers/UserController.js';

const router = experss.Router();

router.route('/register').post(RegisterUser);

router.route('/login').post(LoginUser);



export default router