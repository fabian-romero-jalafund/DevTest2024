import { inject, injectable } from "inversify";
import { IPollService } from "../interfaces/IPollService";
import { INTERFACES_TYPE } from "../../utils/identifiers";
import { RequestHandler } from "express";
import { Poll } from "../../core/entities/Poll";
import { CreatePollDTO } from "../dtos/CreatePollDTO";
import { mapCreatePollDTOtoPoll } from "../mapper/pollMapper";
import { ResErrorInterface } from "../../utils/types";
import { Vote } from "../../core/entities/Vote";
import { CreateVoteDTO } from "../dtos/CreateVoteDTO";
import { mapCreateVoteDTOtoVote } from "../mapper/voteMapper";

@injectable()
export class PollController {
  private service: IPollService;

  constructor(@inject(INTERFACES_TYPE.PollService) service: IPollService) {
    this.service = service;
  }

  public onCreatePoll: RequestHandler<
    {},
    Poll | ResErrorInterface,
    CreatePollDTO
  > = (req, res) => {
    try {
      const pollDTO = req.body;
      const poll = mapCreatePollDTOtoPoll(pollDTO);

      const createdPoll = this.service.add(poll);
      res.status(201).json(createdPoll);
    } catch (error) {
      res.status(400).json({
        message: "Unable to create the poll.",
        details: error + "",
      });
    }
  };

  public onGetPolls: RequestHandler<{}, Poll[] | ResErrorInterface, {}> = (
    _req,
    res
  ) => {
    try {
      const polls = this.service.getAll();

      res.status(200).json(polls);
    } catch (error) {
      res.status(400).json({
        message: "Unable to get the polls.",
        details: error + "",
      });
    }
  };

  public onVoteOptionPoll: RequestHandler<
    { id: string },
    Vote | ResErrorInterface,
    CreateVoteDTO
  > = (req, res) => {
    try {
      const pollId = parseInt(req.params.id);
      const dto = req.body;
      const vote = mapCreateVoteDTOtoVote(dto, pollId);

      const createdVote = this.service.voteOnPoll(pollId, vote);

      if (!createdVote)
        res.status(400).json({
          message: " Unable to submit the vote.",
          details: "Poll not found",
        });
      else res.status(200).json(createdVote);
    } catch (error) {
      res.status(400).json({
        message: " Unable to submit the vote.",
        details: error + "",
      });
    }
  };
}
