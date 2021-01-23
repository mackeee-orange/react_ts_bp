import { Moment } from "moment";

export type Gender = "male" | "female" | "other";

export default interface Account {
  id: string;
  email: string;
  username: string;
  gender: Gender | null;
  birthday: Moment | null;
  avatarUrl: string;
}
