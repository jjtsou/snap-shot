import styled from 'styled-components';

const StyledImageGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  flex: 1 0 auto;
  max-height: 40vh;
  max-height: 40vw;
  padding: 10px;
  border-radius: 15px;
`;

export { StyledImageGallery, StyledImage };
