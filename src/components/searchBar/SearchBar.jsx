import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  StyledSearchBar,
  StyledSearchIcon,
  StyledSearchInput,
} from './SearchBar.styles';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const setInputValue = (e) => setValue(e.target.value);
  const handleInputClick = (e) => e.code === 'Enter' && console.log(value);
  return (
    <StyledSearchBar>
      <StyledSearchInput
        type="text"
        value={value}
        onChange={setInputValue}
        onKeyPress={handleInputClick}
        placeholder="Search"
        aria-label="Search for images"
      />
      <StyledSearchIcon onClick={() => console.log(value)}>
        <FontAwesomeIcon icon={faSearch} color="gray" />
      </StyledSearchIcon>
    </StyledSearchBar>
  );
};

export default SearchBar;
