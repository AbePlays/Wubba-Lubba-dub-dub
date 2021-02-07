export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: Origin;
  image: string;
};

export type Origin = {
  name: string;
  url: string;
};
