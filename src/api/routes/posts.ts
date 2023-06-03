// import { Router } from "express";
// import {
//   createPost,
//   getExternalPosts,
//   getPostsByUserId,
// } from "@controllers/posts";
// import { rateLimiter } from "../middlewares/rate-limiter";
// import { body } from "express-validator";
// import validate from "../middlewares/validator";

// const router = Router();

// /** Rate Limiting only 1 Request for 1 Minute  */
// router.post(
//   "/create",
//   rateLimiter(60 * 1000, 1),
//   [
//     body("title")
//       .isString()
//       .isLength({ min: 10, max: 100 })
//       .withMessage("Invalid title lenth"),
//     body("content").isLength({ min: 50 }),
//     body("user_id").isNumeric(),
//   ],
//   validate,
//   createPost
// );
// router.get("/external", getExternalPosts);
// router.get("/:user_id", getPostsByUserId);

// export default router;
