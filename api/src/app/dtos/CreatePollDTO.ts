import { CreateOptionDTO } from "./CreateOptionDTO";

export class CreatePollDTO {
  constructor(public name: string, public options: CreateOptionDTO[]) {}
}
