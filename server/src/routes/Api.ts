import { Router } from "express";
import HomeController from "../controllers/HomeController";
import PostController from "../controllers/PostController";
import UserController from "../controllers/UserController";
import { auth } from "../middleware/Authenticate";
let router = Router();

router.get("/", HomeController.index);

router.post("/posts/create", auth, PostController.create);
router.get("/posts/:id", auth, PostController.view);
router.put("/posts/:id/update", auth, PostController.update);
router.delete("/posts/:id/delete", auth, PostController.delete);

router.post("/users/login", UserController.login);


export default router;
