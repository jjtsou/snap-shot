import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getPhotos } from '../../../unsplash';
import { filterImageProperties } from '../../utils/filterImageProperties';
import {
  StyledSearchBar,
  StyledSearchIcon,
  StyledSearchInput,
} from './SearchBar.styles';

const SearchBar = ({ setImages }) => {
  const [value, setValue] = useState('');
  const setInputValue = (e) => setValue(e.target.value);
  const searchForImages = () => {
    getPhotos({ query: value }).then((images) => {
      const filteredImages = filterImageProperties(images);
      setImages(filteredImages);
    });
  };

  return (
    <StyledSearchBar>
      <StyledSearchInput
        type="text"
        value={value}
        onChange={setInputValue}
        placeholder="Search"
        aria-label="Search for images"
      />
      <StyledSearchIcon onClick={searchForImages}>
        <FontAwesomeIcon icon={faSearch} color="gray" />
      </StyledSearchIcon>
    </StyledSearchBar>
  );
};

export default SearchBar;
