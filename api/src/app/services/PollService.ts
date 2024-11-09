import { inject, injectable } from "inversify";
import { Poll } from "../../core/entities/Poll";
import { IPollService } from "../interfaces/IPollService";
import { IPollRepository } from "../../infra/interfaces/IPollRepository";
import { INTERFACES_TYPE } from "../../utils/identifiers";
import { Vote } from "../../core/entities/Vote";
import { IVoteRepository } from "../../infra/interfaces/IVoteRepository";

@injectable()
export class PollService implements IPollService {
  private pollRepository: IPollRepository;
  private voteRepository: IVoteRepository;

  constructor(
    @inject(INTERFACES_TYPE.PollRepository) pollRepository: IPollRepository,
    @inject(INTERFACES_TYPE.VoteRepository) voteRepository: IVoteRepository
  ) {
    this.pollRepository = pollRepository;
    this.voteRepository = voteRepository;
  }

  public add = (poll: Poll) => {
    return this.pollRepository.add(poll);
  };

  public getAll = () => {
    return this.pollRepository.getAll();
  };

  public voteOnPoll = (id: number, vote: Vote) => {
    const uploadedVote = this.voteRepository.add(vote);
    return this.pollRepository.voteOnPoll(id, uploadedVote);
  };
}
