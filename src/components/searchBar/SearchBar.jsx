import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getPhotos } from '../../../unsplash';
import { filterImageProperties } from '../../utils/filterImageProperties';
import {
  StyledSearchBar,
  StyledSearchIcon,
  StyledSearchInput,
} from './SearchBar.styles';

const SearchBar = ({ setImages, query, setQuery, setPage }) => {
  const setInputValue = (e) => setQuery(e.target.value);
  const searchForImages = () => {
    getPhotos({ query })
      .then((images) => {
        const filteredImages = filterImageProperties(images);
        setImages(filteredImages);
      })
      .then(setPage(1));
  };
  const onHandleKeyDown = (e) => {
    if (e.key === 'Enter') searchForImages();
  };

  return (
    <StyledSearchBar>
      <StyledSearchInput
        type="text"
        value={query}
        onChange={setInputValue}
        onKeyDown={onHandleKeyDown}
        placeholder="Search"
        aria-label="Search for images"
      />
      <StyledSearchIcon onClick={searchForImages}>
        <FontAwesomeIcon icon={faSearch} color="gray" />
      </StyledSearchIcon>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  setImages: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default SearchBar;
