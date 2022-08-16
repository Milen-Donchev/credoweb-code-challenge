import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";

import SeasonsListItem from "./SeasonsListItem";

const SeasonsWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeasonsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`;

const SeasonsList = () => {
  const seasons = useAppSelector((state) => state.tvSeries.seasons);

  return (
    <SeasonsWrapper>
      <SeasonsListWrapper>
        {seasons.map((season: string) => (
          <SeasonsListItem seasonNumber={season} />
        ))}
      </SeasonsListWrapper>
    </SeasonsWrapper>
  );
};

export default SeasonsList;
