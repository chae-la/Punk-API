import { FormEvent, useState } from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Card from "../../Components/Card/Card";
import "./SearchBeers.scss";
import FilterTab from "../FilterTab/FilterTab";
import API from "../../Data/API.json";
import fallback from "../../assets/images/fallback.png";


const SearchBeers = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchInput(input);
  };

  const applyFilters = (beers: any[]) => {
    let filtered = [...beers];

    filtered = filtered.filter((beer) =>
      beer.name.toLowerCase().includes(searchInput)
    );

    const onlyYear = (date: string): number => {
      const splitDate = date.split("/").pop();
      if (splitDate) {
        const dateAsNum = parseFloat(splitDate);
        return dateAsNum;
      } else {
        throw new Error("Invalid date format");
      }
    };

    selectedFilters.forEach((filter) => {
      if (filter === "LowABV") {
        filtered = filtered.filter((beer) => beer.abv >= 4 && beer.abv <= 10);
      } else if (filter === "HighABV") {
        filtered = filtered.filter(
          (beer) => beer.abv >= 10.1 && beer.abv <= 20
        );
      } else if (filter === "HigherABV") {
        filtered = filtered.filter((beer) => beer.abv >= 15.1);
      } else if (filter === "StrongAcid") {
        filtered = filtered.filter(
          (beer) => beer.ph != null && beer.ph >= 1 && beer.ph <= 4.2
        );
      } else if (filter === "WeakAcid") {
        filtered = filtered.filter(
          (beer) => beer.ph !== null && beer.ph >= 4.3 && beer.ph <= 6
        );
      } else if (filter === "Modern") {
        filtered = filtered.filter(
          (beer) => onlyYear(beer.first_brewed) >= 2011
        );
      } else if (filter === "Classic") {
        filtered = filtered.filter(
          (beer) => onlyYear(beer.first_brewed) <= 2010
        );
      }
    });

    return filtered;
  };

  const filteredBeers = applyFilters(API);

  return (
    <div className="searchbeer">
      <div className="searchbeer__filter">
        <SearchBox
          name="Beers"
          searchTerm={searchInput}
          handleInput={handleSearchInput}
        />
        <FilterTab
          handleChange={(filterType) => {
            setSelectedFilters((prevFilters) => {
              if (prevFilters.includes(filterType)) {
                return prevFilters.filter((filter) => filter !== filterType);
              } else {
                return [...prevFilters, filterType];
              }
            });
          }}
        />
        <h3 className="searchbeer__filter searchbeer__filter--result-num">
          Results: {filteredBeers.length}
        </h3>
      </div>
      <div>
        {filteredBeers.map((alcohol) => (
          <Card
            key={alcohol.id}
            name={alcohol.name}
            description={alcohol.description}
            image={alcohol.image_url ?? fallback}
            food_pairing={alcohol.food_pairing}
            brewer_tips={alcohol.brewers_tips}
            abv={alcohol.abv}
            firstBrewed={alcohol.first_brewed}
            acid={alcohol.ph}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBeers;
