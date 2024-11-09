import { Container } from "inversify";
import { IPollRepository } from "../infra/interfaces/IPollRepository";
import { INTERFACES_TYPE } from "../utils/identifiers";
import { PollRepository } from "../infra/repositories/PollRepository";
import { IPollService } from "../app/interfaces/IPollService";
import { PollService } from "../app/services/PollService";
import { PollController } from "../app/controllers/PollController";
import { VoteRepository } from "../infra/repositories/VoteRepository";
import { IVoteRepository } from "../infra/interfaces/IVoteRepository";

const pollContainer = new Container();

pollContainer
  .bind<IVoteRepository>(INTERFACES_TYPE.VoteRepository)
  .to(VoteRepository);
pollContainer
  .bind<IPollRepository>(INTERFACES_TYPE.PollRepository)
  .to(PollRepository);
pollContainer.bind<IPollService>(INTERFACES_TYPE.PollService).to(PollService);
pollContainer.bind(INTERFACES_TYPE.PollController).to(PollController);

export default pollContainer;
