import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface SeasonsListItemProps {
  seasonNumber: string;
}

const SeasonsListItemWrapper = styled.div`
  width: fit-content;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-bottom: 8px solid orange;
  border-radius: 1rem;
  margin: 0.25rem 0;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
    border-bottom: 8px solid darkorange;
  }
`;

const SeasonsListItemText = styled.h1`
  color: white;
`;

const SeasonsListItem = (props: SeasonsListItemProps) => {
  const { seasonNumber } = props;

  const navigate = useNavigate();

  const handleSeasonSelection = async () =>
    navigate(`/seasons/${seasonNumber}`);

  return (
    <SeasonsListItemWrapper key={seasonNumber} onClick={handleSeasonSelection}>
      <SeasonsListItemText>Season {seasonNumber}</SeasonsListItemText>
    </SeasonsListItemWrapper>
  );
};

export default SeasonsListItem;
