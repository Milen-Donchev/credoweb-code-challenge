import React from "react";
import styled from "styled-components";

import EpisodeCard from "./EpisodeCard";

interface EpisodesListProps {
  episodes: any[];
}

const EpisodesWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const EpisodesListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const EpisodesList = (props: EpisodesListProps) => {
  const { episodes } = props;

  return (
    <EpisodesWrapper>
      <EpisodesListWrapper>
        {episodes.map((episode) => (
          <EpisodeCard episode={episode} />
        ))}
      </EpisodesListWrapper>
    </EpisodesWrapper>
  );
};

export default EpisodesList;
