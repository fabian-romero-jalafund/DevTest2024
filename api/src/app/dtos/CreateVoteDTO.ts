export class CreateVoteDTO {
    constructor(
      public optionId: number,
      public voterEmail: string,
    ) {}
  }
  