import { NextFunction, Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers
    console.log(header['user-agent']);

    next();
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
};

export { logMiddleware };
