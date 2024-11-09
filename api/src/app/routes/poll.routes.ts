import { Router } from "express";
import pollContainer from "../../config/polls.inversify";
import { INTERFACES_TYPE } from "../../utils/identifiers";
import { PollController } from "../controllers/PollController";

const pollRouter = Router();
const controller: PollController = pollContainer.get(
  INTERFACES_TYPE.PollController
);

pollRouter.post("/polls", controller.onCreatePoll);
pollRouter.get("/polls", controller.onGetPolls);

export default pollRouter;
