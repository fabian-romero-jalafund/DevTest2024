import { Poll } from "../../core/entities/Poll";
import { Vote } from "../../core/entities/Vote";
import { InMemoryStorage } from "../database/InMemoryStorage";
import { IPollRepository } from "../interfaces/IPollRepository";

export class PollRepository implements IPollRepository {
  private db: InMemoryStorage<Poll>;

  constructor() {
    this.db = new InMemoryStorage();
  }

  public getAll = () => {
    return this.db.getAll();
  };

  public add = (poll: Poll) => {
    poll.id = this.db.getAll().length + 1;
    this.db.add(poll);
    return poll;
  };

  public update = (id: number, newPoll: Poll) => {
    return this.db.updateByKey("id", id, newPoll);
  };

  public getById = (id: number) => {
    return this.db.findByKey("id", id);
  };

  public voteOnPoll = (id: number, vote: Vote) => {
    const currentPoll = this.db.findByKey("id", id);
    if (!currentPoll) return undefined;

    const option = currentPoll.options.find((opt) => opt.id === vote.optionId);

    if (!option) return undefined;

    option.votes++;

    return vote;
  };
}
