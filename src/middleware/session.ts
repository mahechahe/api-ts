import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtHandler";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request{
    user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop()
        const isUser = verifyToken(`${jwt}`)
        
        if(!isUser) return res.status(401).send('NO_TIENES_UN_JWT')
        req.user = isUser
        next()
    } catch (error) {
        res.status(400)
        res.send('SESSION_NO_VALIDA')
    }
}

export { checkJwt }