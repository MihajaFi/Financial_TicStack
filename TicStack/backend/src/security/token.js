import jwt from "jsonwebtoken";

function generateAccessToken(payload) {
    return jwt.sign(payload, process.env.JWT_TOKEN, {});
}

export default generateAccessToken;