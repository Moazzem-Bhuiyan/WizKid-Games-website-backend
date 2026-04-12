import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { IVelkiAgent } from './velkiAgent.interface';
import VelkiAgent from './velkiAgent.schema';
import QueryBuilder from '../../class/builder/QueryBuilder';

const create = async (payload: IVelkiAgent) => {
  const result = await VelkiAgent.create(payload);
  if (!result)
    throw new AppError(httpStatus.BAD_REQUEST, 'Velki agent create failed');
  return result;
};
const update = async (id: string, payload: Partial<IVelkiAgent>) => {
  const result = await VelkiAgent.findByIdAndUpdate(id, payload, { new: true });
  if (!result)
    throw new AppError(httpStatus.BAD_REQUEST, 'Velki agent update failed');
  return result;
};

const findAll = async (query: Record<string, any>) => {
  const builder = new QueryBuilder(VelkiAgent.find({}), query)
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
  const result = VelkiAgent.findById(id);
  if (!result)
    throw new AppError(httpStatus.NOT_FOUND, 'Velki agent not found');
  return result;
};

const deleteById = async (id: string) => {
  const result = VelkiAgent.findByIdAndDelete(id);
  if (!result)
    throw new AppError(httpStatus.BAD_REQUEST, 'Velki agent Delete failed');
  return result;
};

const velkiAgentService = {
  create,
  update,
  findAll,
  findById,
  deleteById,
};
export default velkiAgentService;
