import { NextFunction, Request, Response } from "express";

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> {
  //verificar se o usuario é admin
  const admin = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({ error: "User unauthorized" });
}

export { ensureAdmin };
