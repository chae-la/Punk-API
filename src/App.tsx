import './App.scss'
import Card from './Components/Card/Card';
import beers from './Data/beers';
import FilterBeers from './containers/FilterBeers';

const App = () => {
 return (
  <div className="app">
    <h1 className="app__heading">Brewdog - Punk API</h1>
    <FilterBeers  />
    

  </div>
 )
}

export default App;
