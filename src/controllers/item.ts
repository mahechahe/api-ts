import { Request, Response, response } from 'express';
import { handleHttp } from '../utils/error.handler';
import { getCars, insertCar, getCar, updatedCar, deletedCar } from '../services/item.service';

export const getItem = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const response = await getCar(id)
        return res.json(response)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

export const getItems =async  (req: Request, res: Response) => {
    try {
        const response = await getCars()
        return res.json(response)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

export const updateItem = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const response = await updatedCar(id, req.body)
        return res.json(response)
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

export const postItem = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const responseItem = await insertCar(body)
        res.status(201).json({responseItem})
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM')
    }
}

export const deleteItem = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const response = await deletedCar(id)
        const data = response ? response : 'NOT_FOUND'

        return res.json(data)
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM', error)
    }
}