import ReactDom from 'react-dom';
import SearchBar from './components/searchBar/SearchBar';

const App = () => <SearchBar />;

ReactDom.render(<App />, document.getElementById('root'));
