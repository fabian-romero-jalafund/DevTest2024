import { inject, injectable } from "inversify";
import { Poll } from "../../core/entities/Poll";
import { IPollService } from "../interfaces/IPollService";
import { IPollRepository } from "../../infra/interfaces/IPollRepository";
import { INTERFACES_TYPE } from "../../utils/identifiers";

@injectable()
export class PollService implements IPollService {
  private repository: IPollRepository;

  constructor(
    @inject(INTERFACES_TYPE.PollRepository) repository: IPollRepository
  ) {
    this.repository = repository;
  }

  public add = (poll: Poll) => {
    return this.repository.add(poll);
  };

  public getAll = () => {
    return this.repository.getAll();
  };
}
