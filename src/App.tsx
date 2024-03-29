import "./App.scss";
import SearchBeers from "./containers/SearchBeers/SearchBeers";


const App = () => {
  return (
    <div className="app">
      <h1 className="app__heading">Brewdog - Punk API</h1>
      <SearchBeers />
    </div>
  );
};

export default App;
