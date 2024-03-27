import './App.scss'
import Card from './Components/Card/Card';
import beers from './Data/beers';

const App = () => {
 return (
  <div className="app">
    <h1 className="app__heading">Brewdog - Punk API</h1>
    <Card name={beers[0].name} description={beers[0].description} image={beers[0].image_url} />

  </div>
 )
}

export default App;
