export type CharacterType = {
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

export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[] | null;
};

export type SeasonType = {
  id: number;
  numberOfEpisodes: number;
  imageUrl: string;
};

export type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
};
