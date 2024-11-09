import { Option } from "../../core/entities/Option";
import { Poll } from "../../core/entities/Poll";
import { CreatePollDTO } from "../dtos/CreatePollDTO";

export const pollCreatePollDTO = (dto: CreatePollDTO): Poll => {
  const options = dto.options.map((opt, index) => new Option(opt.name, 0, index + 1));
  return new Poll(dto.name, options);
};
