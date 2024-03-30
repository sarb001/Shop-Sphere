
import experss  from 'express';
import { Checkout, GetKey, LoginUser, LogoutUser, PaymentVerification, Profile, RegisterUser } from '../Controllers/UserController.js';
import { VerifyAuth } from '../Authentication/Auth.js';

const router = experss.Router();

router.route('/register').post(RegisterUser);

router.route('/login').post(LoginUser);

router.route('/profile').get(VerifyAuth,Profile);

router.route('/logout').get(VerifyAuth,LogoutUser);

router.route('/checkout').post(VerifyAuth,Checkout);

router.route('/paymentkey').get(VerifyAuth,GetKey);

router.route('/paymentverification').post(VerifyAuth,PaymentVerification);





export default router