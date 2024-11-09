import { Vote } from "../../core/entities/Vote";

export interface IVoteRepository {
  add: (vote: Vote) => Vote;
}
