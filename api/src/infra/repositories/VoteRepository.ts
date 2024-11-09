import { Vote } from "../../core/entities/Vote";
import { InMemoryStorage } from "../database/InMemoryStorage";
import { IVoteRepository } from "../interfaces/IVoteRepository";

export class VoteRepository implements IVoteRepository {
    private db: InMemoryStorage<Vote>;

    constructor() {
      this.db = new InMemoryStorage();
    }

    public add = (vote: Vote) => {
        vote.id = this.db.getAll().length + 1;
        return this.db.add(vote)
    };
    
}