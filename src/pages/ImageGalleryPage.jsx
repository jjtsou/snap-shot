import { useEffect, useState } from 'react';
import { StyledImageGalleryPage } from './ImageGalleryPage.styles';
import ImageGallery from '../components/imageGallery';
import SearchBar from '../components/searchBar';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { getPhotos } from '../../unsplash';
import { filterImageProperties } from '../utils/filterImageProperties';

const ImageGalleryPage = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isIntersecting]);

  useEffect(() => {
    if (page !== 1 && query) {
      getPhotos({ query, page }).then((imagesFromApi) => {
        const filteredImages = filterImageProperties(imagesFromApi);
        const newImages = [...images, ...filteredImages];
        setImages(newImages);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <StyledImageGalleryPage>
      <SearchBar
        setImages={setImages}
        query={query}
        setQuery={setQuery}
        setPage={setPage}
      />
      <ImageGallery images={images} ref={ref} />
    </StyledImageGalleryPage>
  );
};

export default ImageGalleryPage;
