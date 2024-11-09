import { Vote } from "../../core/entities/Vote";
import { CreateVoteDTO } from "../dtos/CreateVoteDTO";

export const mapCreateVoteDTOtoVote = (
  dto: CreateVoteDTO,
  pollId: number
): Vote => {
  return new Vote(dto.optionId, dto.voterEmail, pollId);
};
