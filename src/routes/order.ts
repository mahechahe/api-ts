import { Router, Request, Response } from 'express';
import { getItemsOrders } from '../controllers/order';
import { checkJwt } from '../middleware/session';

const router = Router()

router.get('/', checkJwt, getItemsOrders)

export { router };