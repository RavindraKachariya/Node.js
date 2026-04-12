import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export async function register(req, res) {
    const { username, email, password } = req.body;

    const isAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    if (isAlreadyExist) {
        res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword
    });

    const accessToken = jwt.sign({
        id: newUser._id
    }, config.jwtSecret,
        {
            expiresIn: "15min"
        }
    );

    const refreshToken = jwt.sign({
        id: newUser._id
    }, config.jwtSecret,
        {
            expiresIn: "7d"
        }
    );

    res.status(201).json({
        message: "User registered successfully",
        user: {
            username: newUser.username,
            email: newUser.email,
        },
        accessToken
    });
}

export async function getMe(req, res) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }

    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await userModel.findById(decoded.id);

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            username: user.username,
            email: user.email,
        }
    });
}