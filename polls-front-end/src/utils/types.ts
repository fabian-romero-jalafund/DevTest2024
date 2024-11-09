export interface Poll {
  name: string;
  options: Option[];
  id?: number;
}

export interface Option {
  name: string;
  votes?: number;
  id?: number;
}

export interface Vote {
  optionId?: number;
  voterEmail: string;
  pollId: number;
  id?: number;
}
