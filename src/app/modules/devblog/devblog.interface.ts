import { Model } from 'mongoose';

export interface Devblog {
  title: string;
  description: string;
}
export type IDevblogModules = Model<Devblog, Record<string, unknown>>;
