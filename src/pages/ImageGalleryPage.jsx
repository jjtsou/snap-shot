import { useState } from 'react';
import { StyledImageGalleryPage } from './ImageGalleryPage.styles';
import ImageGallery from '../components/imageGallery';
import SearchBar from '../components/searchBar';

const ImageGalleryPage = () => {
  const [images, setImages] = useState([]);

  return (
    <StyledImageGalleryPage>
      <SearchBar setImages={setImages} />
      <ImageGallery images={images} />
    </StyledImageGalleryPage>
  );
};

export default ImageGalleryPage;
