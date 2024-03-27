import "./App.scss";
import FilterBeers from "./containers/SearchBeers/SearchBeers";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__heading">Brewdog - Punk API</h1>
      <FilterBeers />
    </div>
  );
};

export default App;
