import { Poll } from "../../core/entities/Poll";
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
}
