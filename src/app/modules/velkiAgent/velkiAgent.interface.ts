import { Model } from 'mongoose';

export interface IVelkiAgent {
  id: string;
  type: string;
  name: string;
  phoneNumber: string;
}
export type IVelkiAgentModules = Model<IVelkiAgent, Record<string, unknown>>;
