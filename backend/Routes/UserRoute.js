
import experss  from 'express';
import { LoginUser, Profile, RegisterUser } from '../Controllers/UserController.js';
import { VerifyAuth } from '../Authentication/Auth.js';

const router = experss.Router();

router.route('/register').post(RegisterUser);

router.route('/login').post(LoginUser);

router.route('/profile').get(VerifyAuth,Profile);



export default router