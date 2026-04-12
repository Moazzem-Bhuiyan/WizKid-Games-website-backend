import { Model } from 'mongoose';

export interface MailList {
  email: string;
}
export type IMailListModules = Model<MailList, Record<string, unknown>>;
