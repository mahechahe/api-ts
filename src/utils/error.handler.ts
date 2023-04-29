import { Response } from "express"

export const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    res.status(500).send({error})
}