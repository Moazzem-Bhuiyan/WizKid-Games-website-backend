import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { Devblog } from './devblog.interface';
import QueryBuilder from '../../class/builder/QueryBuilder';
import DevblogSchema from './devblog.schema';

const create = async (payload: Devblog) => {
  const result = await DevblogSchema.create(payload);
  if (!result)
    throw new AppError(httpStatus.BAD_REQUEST, 'Dev blog create failed');
  return result;
};
const update = async (id: string, payload: Partial<Devblog>) => {
  const result = await DevblogSchema.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!result)
    throw new AppError(httpStatus.BAD_REQUEST, 'Dev blog update failed');
  return result;
};

const findAll = async (query: Record<string, any>) => {
  const builder = new QueryBuilder(DevblogSchema.find({}), query)
    .search(['name', 'phoneNumber', 'type', 'id'])
    .filter()
    .paginate()
    .sort();

  const data: any = await builder.modelQuery;
  const meta = await builder.countTotal();
  return {
    data,
    meta,
  };
};

const findById = async (id: string) => {
  const result = DevblogSchema.findById(id);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Dev blog not found');
  return result;
};

const deleteById = async (id: string) => {
  const result = DevblogSchema.findByIdAndDelete(id);
  if (!result)
    throw new AppError(httpStatus.BAD_REQUEST, 'Dev blog Delete failed');
  return result;
};

const DevblogService = {
  create,
  update,
  findAll,
  findById,
  deleteById,
};
export default DevblogService;
