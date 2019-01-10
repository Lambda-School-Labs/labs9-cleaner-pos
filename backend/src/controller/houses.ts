import {
  findHouse,
  findHouses,
  makeHouse,
  updateHouse,
  deleteHouse,
} from '../models/houses';
import { Request, Response, NextFunction } from 'express';
import * as knex from 'knex';

interface House {
  id?: number;
  name: string;
  address: string;
  price: number;
  cleaning_fee: number;
  extra_guest_fee: number;
  default_ast: string;
  manager: string;
  guest_guide?: any;
  ast_guide?: any;
}

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    let house: knex.QueryBuilder;
    if (id) {
      house = await findHouse(id);
    } else {
      house = await findHouses();
    }
    if (house === undefined) {
      throw Error('no user');
    }
    res.status(200).json(house);
  } catch (e) {
    e.statusCode = 404;
    next(e);
  }
};

export const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const house: House = req.body;
    const newHouse = await makeHouse(house);
    res.status(201).json(newHouse);
  } catch (e) {
    e.statusCode = 400;
    next(e);
  }
};

export const put = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const hId = { ...req.body, id };
    const house: House = hId;
    const putHouse = await updateHouse(house);
    if (!putHouse) {
      throw Error('no user');
    }
    res.status(201).json(putHouse);
  } catch (e) {
    e.statusCode = 404;
    next(e);
  }
};

export const deleteU = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const delUser = await deleteHouse(id);
    res.status(200).json(delUser);
  } catch (e) {
    e.statusCode = 400;
    next(e);
  }
};