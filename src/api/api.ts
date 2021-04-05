import axios from 'axios';
import { UserType } from '../types/types';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'cb03347a-2cb0-4d22-a3a4-4a819bebc1ef',
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCapcthaEnum {
  CaptchaIsRequired = 10,
}

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};
