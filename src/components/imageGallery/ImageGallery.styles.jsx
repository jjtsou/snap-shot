import styled from 'styled-components';

const StyledImageGallery = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 325px;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;

  &:hover {
    transition: all 0.7s;
    transform: scale(1.06);
  }
`;

export { StyledImageGallery, StyledImage };
