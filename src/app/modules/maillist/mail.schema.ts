import { model, Schema } from 'mongoose';
import { IMailListModules, MailList } from './mail.interface';

const schema = new Schema<MailList>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      default: null,
    },
  },
  { timestamps: true },
);

const MailListSchema = model<MailList, IMailListModules>('MailList', schema);
export default MailListSchema;
