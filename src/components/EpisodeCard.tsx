import React, { useState } from "react";
import styled from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs";

import storageService from "../services/storageService";

const FAVORITES_STORAGE_KEY = "favorite-episodes";

interface EpisodeCardProps {
  episode: {
    id: string;
    seasonNumber: string;
    episodeNumber: string;
    title: string;
    imDbRating: string;
    image: string;
    plot: string;
  };
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  border: 2px solid lightgrey;
  border-radius: 0.25rem;
`;

const Image = styled.img`
  width: 100%;
  min-height: 10rem;
  object-fit: cover;
`;

const ContetWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 0.5rem;
`;

const TitleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  width: calc(100% - 24px - 0.5rem);
  /* all of the available width of the card minus the icon's width and the card padding */
  font-size: 0.7rem;
`;

const RatingRow = styled.p`
  width: 100%;
  font-size: 0.75rem;
  color: lightgrey;
  margin-top: 1rem;
`;

const PlotSummary = styled.p`
  width: 100%;
  font-size: 0.65rem;
  color: lightgrey;
  margin-top: 0.5rem;
`;

const EpisodeCard = (props: EpisodeCardProps) => {
  const { episode } = props;

  const [isEpisodeFavorite, setIsEpisodeFavorite] = useState<boolean>(
    storageService.getItem(FAVORITES_STORAGE_KEY)
      ? storageService.getItem(FAVORITES_STORAGE_KEY).includes(episode.id)
      : false
  );

  const starIconColor = isEpisodeFavorite ? "gold" : "white";
  const StarIcon = isEpisodeFavorite ? BsStarFill : BsStar;

  const toggleFavorite = () => {
    if (isEpisodeFavorite) {
      const filteredFavorites = storageService
        .getItem(FAVORITES_STORAGE_KEY)
        .filter((episodeId: string) => episodeId !== episode.id);

      storageService.setItem(FAVORITES_STORAGE_KEY, filteredFavorites);
    } else {
      const favorites = storageService.getItem(FAVORITES_STORAGE_KEY) ?? [];
      const newFavorites = [...favorites, episode.id];
      storageService.setItem(FAVORITES_STORAGE_KEY, newFavorites);
    }
    setIsEpisodeFavorite((isFavorite) => !isFavorite);
  };

  return (
    <CardWrapper key={episode.id}>
      <Image src={episode.image} />
      <ContetWrapper>
        <TitleRow>
          <Title>{episode.title}</Title>
          <StarIcon
            color={starIconColor}
            style={{ cursor: "pointer" }}
            onClick={toggleFavorite}
            size={24}
          />
        </TitleRow>
        <RatingRow>
          Season {episode.seasonNumber} - Episode {episode.episodeNumber} -
          Rating: {episode.imDbRating}/10
        </RatingRow>
        <PlotSummary>{episode.plot}</PlotSummary>
      </ContetWrapper>
    </CardWrapper>
  );
};

export default EpisodeCard;
