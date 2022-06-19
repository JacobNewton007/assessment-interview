import { Router } from "express";
import UserController from "../controllers/user.controller";
import { validateUserCreation, validateUser, validateUpdateUser } from "../middlewares/user.middleware";
const router = Router();


router.post('/create', validateUserCreation, UserController.createUser);
router.get('/', validateUser, UserController.getUser);
router.put('/:id', validateUpdateUser, UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
