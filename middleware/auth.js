import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    try {
        // the default authorization header is Bearer [JWT_token]
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token);
        // console.log(token)
        if (!token) return res.status(403).json({ message: "Token Expired or Invalid Authentication." })

        // looks at the last part of the token, compares it to the refresh token secret
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: "Token Expired or Invalid Authentication." })

            req.user = user
            // console.log(user)
            next()
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}