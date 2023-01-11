import {IAuthor} from "./author";

export interface INote {
  id: number;
  name: string;
  author: IAuthor
}