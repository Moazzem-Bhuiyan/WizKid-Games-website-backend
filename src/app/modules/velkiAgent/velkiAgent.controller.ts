import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import velkiAgentService from './velkiAgent.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const create = catchAsync(async (req: Request, res: Response) => {
  const result = await velkiAgentService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Velki Agent Create Successfully.',
    data: result,
  });
});

const update = catchAsync(async (req: Request, res: Response) => {
  const result = await velkiAgentService.update(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Velki Agent Create Successfully.',
    data: result,
  });
});

const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await velkiAgentService.findAll(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Velki Agent get all Successfully.',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const result = await velkiAgentService.findById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Velki Agent get by id Successfully.',
    data: result,
  });
});

const deleteById = catchAsync(async (req: Request, res: Response) => {
  const result = await velkiAgentService.deleteById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Velki Agent Delete Successfully.',
    data: result,
  });
});

export const velkiAgentController = {
  create,
  update,
  getAll,
  getById,
  deleteById,
};
