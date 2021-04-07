import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { StyledImageGallery, StyledImage } from './ImageGallery.styles';

const ImageGallery = forwardRef(({ images }, ref) => (
  <>
    <StyledImageGallery>
      {images.map(({ id, alt, url }) => (
        <StyledImage key={id} src={url} alt={alt} />
      ))}
    </StyledImageGallery>
    <div className="loading" ref={ref} />
  </>
));

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

ImageGallery.defaultProps = {
  images: [],
};

export default ImageGallery;
