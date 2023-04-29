import { Router, Request, Response } from 'express';

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Hola jeje como tas desde blog')
})

export { router };