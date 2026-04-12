import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import MailListService from './mail.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const result = await MailListService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Mail List Create Successfully.',
    data: result,
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const result = await MailListService.update(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Mail List Update Successfully.',
    data: result,
  });
});

const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await MailListService.findAll(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Mail List get all Successfully.',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const result = await MailListService.findById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Mail List get by id Successfully.',
    data: result,
  });
});

const deleteById = catchAsync(async (req: Request, res: Response) => {
  const result = await MailListService.deleteById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Mail List Delete Successfully.',
    data: result,
  });
});

export const mailController = {
  create,
  update,
  getAll,
  getById,
  deleteById,
};
