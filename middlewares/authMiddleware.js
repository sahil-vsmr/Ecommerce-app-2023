import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

//protected route token based

export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = decode;
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: 'Invalid JWT Token'
        })
    }
}

//admin access

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unathorized Access"
            })
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: "error in middleware",
            error1: error
        })
    }
}