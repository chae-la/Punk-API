import { FormEvent, useState } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Card from "../../Components/Card/Card";
import beers from "../../Data/beers";

const SearchBeers = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchInput(input);
  };

  const handleSearchBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchInput);
  });

  return (
    <div className="searchbeer">
      <SearchBox
        name="Beers"
        searchTerm={searchInput}
        handleInput={handleInput}
      />
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
