import { model, Schema } from 'mongoose';
import { Devblog, IDevblogModules } from './devblog.interface';

const schema = new Schema<Devblog>(
  {
    title: {
      type: String,
      required: true,
      default: null,
    },
    description: {
      type: String,
      required: true,
      default: null,
    },
  },
  { timestamps: true },
);

const DevblogSchema = model<Devblog, IDevblogModules>('Devblog', schema);
export default DevblogSchema;
