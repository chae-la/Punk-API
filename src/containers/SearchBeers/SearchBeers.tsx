import { ChangeEvent, FormEvent, useState } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Card from "../../Components/Card/Card";
import "./SearchBeers.scss";
import FilterTab from "../FilterTab/FilterTab";
import API from "../../Data/API.json";
import fallback from "../../assets/images/fallback.png"

const SearchBeers = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  // const [beerFilter. setBeerFilter] = useState<string>("")

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchInput(input);
  };

  const handleSearchBeers = API.filter((beer) => {
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
            key={alcohol.id}
            name={alcohol.name}
            description={alcohol.description}
            image={alcohol.image_url ?? fallback } food_pairing={alcohol.food_pairing} brewer_tips={alcohol.brewers_tips} />
        ))}
      </div>
    </div>
  );
};

export default SearchBeers;
