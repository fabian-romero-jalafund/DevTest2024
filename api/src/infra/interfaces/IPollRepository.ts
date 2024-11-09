import { Poll } from "../../core/entities/Poll";
import { Vote } from "../../core/entities/Vote";

export interface IPollRepository {
  add: (poll: Poll) => Poll;
  update: (id: number, newPoll: Poll) => Poll | undefined;
  getById: (id: number) => Poll | undefined;
  getAll: () => Poll[];
  voteOnPoll: (id: number, vote: Vote) => Vote | undefined;
}
