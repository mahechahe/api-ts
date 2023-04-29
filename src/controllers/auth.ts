import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handler";

export const registerCtrl = async (req: Request, res: Response) => {
  try {
    const response = await registerNewUser(req.body);
    return res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_USER");
  }
};

export const loginCtrl = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const response = await loginUser({ email, password });
    if (response === "PASSWORD_INCORRECT")
      return res.status(403).json({ message: response });
      
    return res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_USER");
  }
};

export default { registerCtrl, loginCtrl };
