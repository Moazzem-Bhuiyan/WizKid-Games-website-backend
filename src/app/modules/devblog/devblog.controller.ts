import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import DevblogService from './devblog.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const result = await DevblogService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dev Blog Create Successfully.',
    data: result,
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const result = await DevblogService.update(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dev Blog Update Successfully.',
    data: result,
  });
});

const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await DevblogService.findAll(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dev Blog get all Successfully.',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const result = await DevblogService.findById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dev Blog get by id Successfully.',
    data: result,
  });
});

const deleteById = catchAsync(async (req: Request, res: Response) => {
  const result = await DevblogService.deleteById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dev Blog Delete Successfully.',
    data: result,
  });
});

export const devblogController = {
  create,
  update,
  getAll,
  getById,
  deleteById,
};
