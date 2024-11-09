import { inject, injectable } from "inversify";
import { IPollService } from "../interfaces/IPollService";
import { INTERFACES_TYPE } from "../../utils/identifiers";
import { RequestHandler } from "express";
import { Poll } from "../../core/entities/Poll";
import { CreatePollDTO } from "../dtos/CreatePollDTO";
import { pollCreatePollDTO } from "../mapper/pollMapper";
import { ResErrorInterface } from "../../utils/types";

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
      const poll = pollCreatePollDTO(pollDTO);

      const createdPoll = this.service.add(poll);
      res.status(201).json(createdPoll);
    } catch (error) {
      res.status(400).json({
        message: "Not possible to create the poll",
        details: error + "",
      });
    }
  };

  public onGetPolls: RequestHandler<{}, Poll[] | ResErrorInterface, {}> = (
    req,
    res
  ) => {
    try {
      const polls = this.service.getAll();

      res.status(200).json(polls);
    } catch (error) {
      res.status(400).json({
        message: "Not possible to get the polls",
        details: error + "",
      });
    }
  };
}
