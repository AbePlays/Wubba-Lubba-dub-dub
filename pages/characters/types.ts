export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: Origin;
  image: string;
};

export interface Origin {
  name: string;
  url: string;
}
