import { Poll } from "../../core/entities/Poll";

export interface IPollRepository {
  add: (poll: Poll) => Poll;
  getAll: () => Poll[];
}
