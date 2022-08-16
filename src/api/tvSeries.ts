import httpService from "../services/httpService";

const GAME_OF_THRONES_SERIES_ID = "tt0944947";
const IMDB_API_KEY = import.meta.env.VITE_IMDB_API_KEY;

export const fetchTvSeriesSeasons = () =>
  httpService.get(`/Title/${IMDB_API_KEY}/${GAME_OF_THRONES_SERIES_ID}`);

export const fetchSeasonEpisodes = (seasonNumber: string) =>
  httpService.get(
    `/SeasonEpisodes/${IMDB_API_KEY}/${GAME_OF_THRONES_SERIES_ID}/${seasonNumber}`
  );
