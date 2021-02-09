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
