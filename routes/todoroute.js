import express from "express";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todolist.js";

const router = express.Router()

/**
 * @openapi
 * tags:
 *   - name: Todo
 *     description: Todo list related operations
 */

/**
 * @openapi
 * /get_all:
 *   get:
 *     tags:
 *       - Todo
 *     summary: Get all todo list from database (no auth)
 *     responses:
 *       '200':
 *         description: Success
 *       '403':
 *         description: Requested resource is forbidden
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

router.get("/get_all", getAllTodos)

/**
 * @openapi
 * /add_todo:
 *   post:
 *     tags:
 *       - To do
 *     summary: Add a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               todo_name:
 *                 type: string
 *                 example: "Play games"
 *               todo_image:
 *                 type: string
 *                 example: "https://api.dicebear.com/9.x/icons/svg?seed=Katherine"
 *               todo_desc:
 *                 type: string
 *                 example: "Play some games for my free time."
 *               todo_status:
 *                 type: string
 *                 example: "active"

 *     responses:
 *       '200':
 *         description: Successfully added task
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

router.post("/add_todo", createTodo)

/**
 * @openapi
 * /update_todo:
 *   patch:
 *     tags:
 *       - To do
 *     summary: Update a task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               todo_name:
 *                 type: string
 *                 example: "Play games"
 *               todo_image:
 *                 type: string
 *                 example: "https://api.dicebear.com/9.x/icons/svg?seed=Katherine"
 *               todo_desc:
 *                 type: string
 *                 example: "Play some games for my free time."
 *               todo_status:
 *                 type: string
 *                 example: "finished"
 *     responses:
 *       '200':
 *         description: Successfully updated task
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.patch("/update_todo/:id", updateTodo)

/**
 * @openapi
 * /delete_todo/:id:
 *   delete:
 *     tags:
 *       - To do
 *     summary: Delete task
 *     responses:
 *       '200':
 *         description: Todos successfully deleted
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal server error
 */

router.delete("/delete_todo/:id", deleteTodo)

export default router