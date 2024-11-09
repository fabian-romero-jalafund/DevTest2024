export class Vote {
  constructor(
    public optionId: number,
    public voterEmail: string,
    public pollId: number,
    public id?: number
  ) {}
}
