import { Router, Request, Response } from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/item';
import { logMiddleware } from '../middleware/log';

const router = Router()

router.get('/', logMiddleware, getItems)
router.get('/:id', getItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)
router.post('/', postItem)

export { router };