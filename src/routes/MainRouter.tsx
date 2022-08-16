import { Routes, Route } from "react-router-dom";
import { useInitApp } from "../hooks/useInitApp";

import LoadingPage from "./Loading/LoadingPage";

import HomePage from "./Home/HomePage";
import EpisodesPage from "./Episodes/EpisodesPage";

const MainRouter = () => {
  const isAppReady = useInitApp();

  return isAppReady ? (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/seasons/:seasonNumber" element={<EpisodesPage />} />
    </Routes>
  ) : (
    <LoadingPage />
  );
};

export default MainRouter;
