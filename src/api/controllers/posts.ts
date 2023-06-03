// import { AppDataSource } from "@lib/db";
// import { Post, User } from "@models/index";
// import { NextFunction, Request, Response } from "express";
// import { ApiResponse, JPH_Posts } from "../types/lib";
// import { jph_instance } from "@lib/http";

// /** Create a new Post */
// export const createPost = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { title, content, user_id } = req.body;

//     // Find User
//     const user = await User.findOne({ where: { id: Number(user_id) } });
//     if (!user) throw new Error("User not found");

//     const post = new Post();
//     post.title = title;
//     post.content = content;
//     post.user = user;

//     await AppDataSource.manager.save(post);

//     return res.status(200).send({ message: "Post Added", results: [] });
//   } catch (error) {
//     next(error);
//   }
// };

// /** Lists posts by userId */
// export const getPostsByUserId = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { user_id } = req.params;
//   try {
//     // Find User
//     const user = await User.findOne({
//       where: {
//         id: Number(user_id),
//       },
//     });
//     if (!user) throw new Error("No such user found");

//     // Find Records using Foreign Keys Field
//     const posts = await Post.find({
//       where: {
//         user: {
//           id: user.id,
//         },
//       },
//     });

//     return res.status(200).send({ message: "Fetch Success 1", results: posts });
//   } catch (error) {
//     next(error);
//   }
// };

// /**
//  * Get Posts from external API
//  */

// export const getExternalPosts = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const posts: ApiResponse<JPH_Posts[]> = await jph_instance.get("/posts");
//     return res.sendSuccessResponse(posts);
//     // return res.status(200).send(posts);
//   } catch (error) {
//     next(error);
//   }
// };
