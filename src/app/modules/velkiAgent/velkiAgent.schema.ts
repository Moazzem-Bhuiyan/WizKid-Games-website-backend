import { model, Schema } from 'mongoose';
import { IVelkiAgent, IVelkiAgentModules } from './velkiAgent.interface';

const schema = new Schema<IVelkiAgent>(
  {
    id: {
      type: String,
      required: true,
      default: null,
    },
    type: {
      type: String,
      enum: ['home', 'service', 'admin', 'super', 'master'],
      required: true,
      default: null,
    },
    name: {
      type: String,
      required: true,
      default: null,
    },
    phoneNumber: {
      type: String,
      required: true,
      default: null,
    },
  },
  { timestamps: true },
);

const VelkiAgent = model<IVelkiAgent, IVelkiAgentModules>('VelkiAgent', schema);
export default VelkiAgent;
