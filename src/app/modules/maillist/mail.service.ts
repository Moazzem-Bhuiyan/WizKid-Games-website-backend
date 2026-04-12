import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { MailList } from './mail.interface';
import QueryBuilder from '../../class/builder/QueryBuilder';
import MailListSchema from './mail.schema';

const create = async (payload: MailList) => {
  const result = await MailListSchema.create(payload);
  if (!result)
    throw new AppError(httpStatus.BAD_REQUEST, 'Mail list create failed');
  return result;
};
const update = async (id: string, payload: Partial<MailList>) => {
  const result = await MailListSchema.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!result)
    throw new AppError(httpStatus.BAD_REQUEST, 'Mail list update failed');
  return result;
};

const findAll = async (query: Record<string, any>) => {
  const builder = new QueryBuilder(MailListSchema.find({}), query)
    .search(['email'])

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
  const result = MailListSchema.findById(id);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Mail list not found');
  return result;
};

const deleteById = async (id: string) => {
  const result = MailListSchema.findByIdAndDelete(id);
  if (!result)
    throw new AppError(httpStatus.BAD_REQUEST, 'Mail list Delete failed');
  return result;
};

const MailListService = {
  create,
  update,
  findAll,
  findById,
  deleteById,
};
export default MailListService;
