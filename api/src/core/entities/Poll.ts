import { Option } from "./Option";

export class Poll {
  constructor(
    public name: string,
    public options: Option[],
    public id?: number
  ) {}
}
