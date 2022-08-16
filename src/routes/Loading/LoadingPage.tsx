import styled from "styled-components";

const LoadingPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingPageText = styled.h1`
  color: lightgrey;
`;

const LoadingPage = () => {
  return (
    <LoadingPageWrapper>
      <LoadingPageText>
        Loading your Game of Thrones content ...
      </LoadingPageText>
    </LoadingPageWrapper>
  );
};

export default LoadingPage;
