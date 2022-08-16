import { useEffect, useState } from "react";
import { useAppDispatch } from "./redux";

import * as TvSeriesActions from "../store/actions/tv-series/tvSeries";

export const useInitApp = () => {
  const dispatch = useAppDispatch();

  const [isAppReady, setIsAppReady] = useState(false);

  const prepareApp = async () => {
    await dispatch(TvSeriesActions.getTvSeriesSeasons());
    setIsAppReady(true);
  };

  useEffect(() => {
    prepareApp();
  }, []);

  return isAppReady;
};
