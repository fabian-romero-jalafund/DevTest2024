import { Poll } from "../../core/entities/Poll";

export interface IPollService {
  add: (poll: Poll) => Poll;
  getAll: () => Poll[];
}
