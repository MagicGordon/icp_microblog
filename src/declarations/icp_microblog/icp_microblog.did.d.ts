import type { Principal } from '@dfinity/principal';
export interface Message { 'text' : string, 'time' : Time, 'author' : string }
export type Time = bigint;
export interface _SERVICE {
  'follow' : (arg_0: Principal) => Promise<undefined>,
  'follows' : () => Promise<Array<[Principal, string]>>,
  'get_name' : () => Promise<[] | [string]>,
  'post' : (arg_0: string, arg_1: string) => Promise<Time>,
  'posts' : (arg_0: Time) => Promise<Array<Message>>,
  'set_name' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'timeline' : (arg_0: Array<Principal>, arg_1: Time) => Promise<
      Array<Message>
    >,
}