import { createSlice } from "@reduxjs/toolkit";

/*
 ** For the purpose of this coding challenge I will use any[]
 ** as the type of the arrays of objects, stored in this slice for time limit purposes.
 */

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState: {
    seasons: [] as any[],
    seasonEpisodes: {
      seasonNumber: "",
      episodes: [] as any[],
    },
  },
  reducers: {
    GET_TV_SERIES_SEASONS(state, action) {
      state.seasons = action.payload;
    },
    GET_SEASON_EPISODES(state, action) {
      state.seasonEpisodes = action.payload;
    },
  },
});

export const { GET_TV_SERIES_SEASONS, GET_SEASON_EPISODES } =
  tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
