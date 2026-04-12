import { Model, Types } from 'mongoose';

export interface IUser {
  _id?: Types.ObjectId;
  status: string;
  name: string;
  email: string;
  bio: string;
  phoneNumber: string;
  password: string;
  dateOfBirth: string;
  customerId: string;
  profile: string;
  loginWth: 'google' | 'apple' | 'facebook' | 'credentials';
  role: string;
  isGoogleLogin: boolean;
  address?: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  isDeleted: boolean;
  verification: {
    otp: string | number;
    expiresAt: Date;
    status: boolean;
  };
  device: {
    ip: string;
    browser: string;
    os: string;
    device: string;
    lastLogin: string;
  };
}

export interface UserModel extends Model<IUser> {
  isUserExist(email: string): Promise<IUser>;
  IsUserExistId(id: string): Promise<IUser>;
  IsUserExistUserName(userName: string): Promise<IUser>;

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
