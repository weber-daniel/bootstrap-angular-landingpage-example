import {User} from './user';

export interface Comment {

  id: number;
  title: string;
  message: string;
  created: Date;
  byUserID: User;

}
