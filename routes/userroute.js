import express from 'express';
import { signUp, signIn, userInfor, activate } from '../controllers/users.js';
import { auth } from '../middleware/auth.js';


const router = express.Router()

/**
 * @openapi
 * tags:
 *   - name: User
 *     description: User related operations
 */

/**
 * @openapi
 * /user-infor:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user information (need auth)
 *     responses:
 *       '200':
 *         description: User information retrieved
 *       '403':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */

// calls the auth middleware/callback before getting userinformation 
router.get("/user-infor", auth, userInfor)

/**
 * @openapi
 * /signup:
 *   post:
 *     tags:
 *       - User
 *     summary: Sign up a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               personal_id:
 *                 type: string
 *                 example: "BN12363468"
 *               name:
 *                 type: string
 *                 example: "juwono"
 *               email:
 *                 type: string
 *                 example: "juwono@gmail.com"
 *               password:
 *                 type: string
 *                 example: "Password123"
 *               confirmPassword:
 *                 type: string
 *                 example: "Password123"
 *               address:
 *                 type: string
 *                 example: "Bandung, Indonesia"
 *               phone_number:
 *                 type: string
 *                 example: "089286382736431"
 *     responses:
 *       '200':
 *         description: New user registration successfully
 *       '403':
 *         description: Requested resource is forbidden
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

router.post("/signup", signUp);

/**
 * @openapi
 * /activation:
 *   post:
 *     tags:
 *       - User
 *     summary: Activate user account during sign up
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               activation_token:
 *                 type: string
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25hbF9pZCI6IkJOMjgwMjMzNzU4NCIsIm5hbWUiOiJBcmllbDIiLCJlbWFpbCI6ImFyaWVscHJhbmRpMzQzMTVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkL3dSZk1FMEZRWTJJWXk5WTJtT00wLjZic0tZQjR4cWJTYTFyZVZ2U25VNXlnT0FtU1BleW0iLCJhZGRyZXNzIjoiQm9iLCBJbmRvbmVzaWEiLCJwaG9uZV9udW1iZXIiOiIwOTkyODYzODI3MzY0MzIiLCJpYXQiOjE3NDYxODc5MjQsImV4cCI6MTc0NjI3NDMyNH0.LXUSpZEe4E7fO5Poc700VeRAGZkbAFcmFGtOMnvlcJU"
 *          
 *     responses:
 *       '200':
 *         description: User information successfully recorded in database
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal server error
 */

router.post("/activation", activate);

/**
 * @openapi
 * /signin:
 *   post:
 *     tags:
 *       - User
 *     summary: Sign in user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "juwono@gmail.com"
 *               password:
 *                 type: string
 *                 example: "Password123"
 *     responses:
 *       '200':
 *         description: Sign in successfully
 *       '403':
 *         description: Requested resource is forbidden
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
router.post("/signin", signIn);



export default router