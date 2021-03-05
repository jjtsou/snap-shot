import { useState } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/searchBar/SearchBar';

const App = () => {
  const [images, setImages] = useState([]);

  return <SearchBar setImages={setImages} />;
};

ReactDom.render(<App />, document.getElementById('root'));
