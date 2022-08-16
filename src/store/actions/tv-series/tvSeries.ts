import type { AppDispatch } from "../..";

import * as TvSeriesRequests from "../../../api/tvSeries";
import * as TvSeriesActions from "../../slices/tv-series/tvSeries";

export const getTvSeriesSeasons = () => async (dispatch: AppDispatch) => {
  try {
    const result = await TvSeriesRequests.fetchTvSeriesSeasons();
    dispatch(
      TvSeriesActions.GET_TV_SERIES_SEASONS(result.data?.tvSeriesInfo?.seasons)
    );
  } catch (error) {
    /*
     ** Not really handling any potential errors, but for the purpose of
     ** this coding challenge, this should be fine
     */
    console.log("Fetching Tv Series Seasons failed with error: ", error);
  }
};

export const getSeasonEpisodes =
  (seasonNumber: string) => async (dispatch: AppDispatch) => {
    try {
      const result = await TvSeriesRequests.fetchSeasonEpisodes(seasonNumber);
      dispatch(
        TvSeriesActions.GET_SEASON_EPISODES({
          seasonNumber,
          episodes: result.data?.episodes,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
