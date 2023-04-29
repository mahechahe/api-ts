import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handler';

export const getBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}

export const getBlogs = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}

export const updateBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BLOG')
    }
}

export const postBlog = (req: Request, res: Response) => {
    try {
        const { body } = req
        res.send(body)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_BLOG')
    }
}

export const deleteBlog = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_BLOG')
    }
}