import { sign, verify } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || '31230123'

const generateToken = (id: string) => {
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: '2h'
    })
    return jwt;
}

const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}

export { verifyToken, generateToken }