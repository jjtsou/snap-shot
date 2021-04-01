import PropTypes from 'prop-types';
import { StyledImageGallery, StyledImage } from './ImageGallery.styles';

const ImageGallery = ({ images }) => (
  <StyledImageGallery>
    {images.map(({ id, alt, url }) => (
      <StyledImage key={id} src={url} alt={alt} />
    ))}
  </StyledImageGallery>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

ImageGallery.defaultProps = {
  images: [],
};

export default ImageGallery;
