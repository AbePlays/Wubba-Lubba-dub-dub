export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[] | null;
};

export type Season = {
  id: number;
  numberOfEpisodes: number;
  imageUrl: string;
};
