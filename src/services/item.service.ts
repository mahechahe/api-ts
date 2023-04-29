import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/Item";

const insertCar = async (item: Car) => {
  const response: Car = await ItemModel.create(item);
  return response;
};

const getCars = async () => {
  const response = await ItemModel.find();
  return response;
};

const getCar = async (id: string) => {
  const response = await ItemModel.findOne({ _id: id });
  return response;
};

const updatedCar = async (id: string, data: Car) => {
  const response = await ItemModel.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

const deletedCar = async (id: string) => {
  const response = await ItemModel.findByIdAndDelete(id)
  return response;
};

export { insertCar, getCars, getCar, deletedCar, updatedCar };
