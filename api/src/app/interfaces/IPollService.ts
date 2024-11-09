import { Poll } from "../../core/entities/Poll";
import { Vote } from "../../core/entities/Vote";

export interface IPollService {
  add: (poll: Poll) => Poll;
  getAll: () => Poll[];
  voteOnPoll: (id: number, vote: Vote) => Vote | undefined
}
