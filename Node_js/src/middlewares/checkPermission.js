import jwt from 'jsonwebtoken'
import User from '../models/users'

export const  checkPermission = async (req, res, next) => {
    const authHeader = req.headers.authorization;
     const token = authHeader && authHeader.splip(" ")[1]

     if(!authHeader) {
        return res.status(401).json({
            message: "Ban chua dang nhap"
        })
     }

     jwt.verify(token, "trunganh", async (err, payload) => {
        if(err === "JsonWebTokenError"){
            return res.status(400).json({
                message: "Token khong hop le"
            })
        }
        if(err === "TokenExpiredError"){
            return res.status(400).json({
                message: "Token da het han"
            })
        }
        const user = await User.findById(payload.id)
        if(user.role !== "admin") {
            return res.status(403).json({
                message: "Ban khong co quyen thuc hien hanh dong nay"
            })
        }
        next()
     })
}