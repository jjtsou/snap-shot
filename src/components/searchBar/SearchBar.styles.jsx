import styled from 'styled-components';

const StyledSearchBar = styled.div`
  width: auto;
  max-width: 35%;
  height: auto;
  max-height: 36px;
  margin: 0 auto;
  display: flex;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 3px solid lightGray;
  border-radius: 10px 0 0 10px;
  border-right: none;
  outline: none;
  font-size: 20px;
  color: #505060;
  background: none;
`;

const StyledSearchIcon = styled.span`
  text-align: center;
  padding: 2px;
  width: 52px;
  cursor: pointer;
  border: 3px solid lightGray;
  border-radius: 0 10px 10px 0;
  background: none;
  font-size: 20px;
  border-left: 3px solid lightGray;
`;

export { StyledSearchBar, StyledSearchInput, StyledSearchIcon };
