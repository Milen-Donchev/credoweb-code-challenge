import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import * as TvSeriesActions from "../../store/actions/tv-series/tvSeries";

import LoadingPage from "../Loading/LoadingPage";
import EpisodesList from "../../components/EpisodesList";

const EpisodesPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const episodesData = useAppSelector((state) => state.tvSeries.seasonEpisodes);

  const [isLoading, setIsLoading] = useState(true);

  const getSeasonEpisodes = async () => {
    if (
      params.seasonNumber &&
      // Avoid calling the API on every render, but only when a new season is opened.
      episodesData.seasonNumber !== params.seasonNumber
    ) {
      await dispatch(TvSeriesActions.getSeasonEpisodes(params?.seasonNumber));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getSeasonEpisodes();
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <EpisodesList episodes={episodesData.episodes} />
  );
};

export default EpisodesPage;
