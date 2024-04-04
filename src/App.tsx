import "./App.scss";
import SearchBeers from "./containers/SearchBeers/SearchBeers";
import Nav from "./Components/Nav/Nav";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__heading">Brewdog - Punk API</h1>
      <Nav />
      <SearchBeers />
    </div>
  );
};

export default App;
