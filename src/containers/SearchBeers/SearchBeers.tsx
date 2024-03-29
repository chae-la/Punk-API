import { ChangeEvent, FormEvent, useState } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Card from "../../Components/Card/Card";
import beers from "../../Data/beers";
import "./SearchBeers.scss";
import FilterTab from "../FilterTab/FilterTab";

const SearchBeers = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  // const [beerFilter. setBeerFilter] = useState<string>("")

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchInput(input);
  };

  const handleSearchBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchInput);
  });

  // make the filterTab actally filter things
  // make it so the selected filters all coincide and work with each other
  // make it so the selected filters work with the name search as well?

  // const handleFilter = (event: ChangeEvent<HTMLInputElement>) =>{
  //   const input = event.currentTarget.value;
  //   setBeerFilter(input)
  // }


  return (
    <div className="searchbeer">
      <div className="searchbeer__filter">
        <SearchBox
          name="Beers"
          searchTerm={searchInput}
          handleInput={handleInput}
        />
        <FilterTab />
      </div>
      <div>
        {handleSearchBeers.map((alcohol) => (
          <Card
            name={alcohol.name}
            description={alcohol.description}
            image={alcohol.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBeers;
