import jwt from "jsonwebtoken";

export function signToken(payload, expiresIn = "30d") {
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn });
}
