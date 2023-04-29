import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handler";
import { getOrders } from "../services/order.service";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request{
  user?: string | JwtPayload
}

export const getItemsOrders = async (req: RequestExt, res: Response) => {
  try {
    const response = await getOrders();
    return res.json({data: response, message: 'Esto solo lo ven las personas que tengan JWT', user: req.user});
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export default { getItemsOrders };
