// import { ChangeEvent, FormEvent, useState } from "react";
// import SearchBox from "../../Components/SearchBox/SearchBox";
// import Card from "../../Components/Card/Card";
// import "./SearchBeers.scss";
// import FilterTab from "../FilterTab/FilterTab";
// // import API from "../../Data/API.json";
// import fallback from "../../assets/images/fallback.png";
// import beers from "../../Data/beers";
// import { Beer } from "../../Data/types";


// const SearchBeers = () => {
//   const API: Beer[] = beers
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [beerFilter, setBeerFilter] = useState<string>("All");
//   const [beerABV, setBeerABV] = useState<string>("");

//   const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
//     const input = event.currentTarget.value.toLowerCase();
//     setSearchInput(input);
//   };
//   const handleABVfilter = (event: ChangeEvent<HTMLInputElement>) => {
//     const input = event.currentTarget.value;
//     setBeerABV(input)
//   }

//   const handleSearchBeers = API.filter((beer) => {
//     return beer.name.toLowerCase().includes(searchInput);
//   });

//   // if Punk API worked
//   // const getBeers = async () => {
//   //   const url = ""
//   //   const res = await fetch(url);
//   //   const data = await res.json();
//   //   setBeerFilter(data.results)
//   // }

//   const onlyYear = (date: string): number => {
//     const splitDate = date.split("/").pop();
//     if (splitDate) {
//       const dateAsNum = parseFloat(splitDate);
//       return dateAsNum;
//     } else {
//       throw new Error("Invalid date format");
//     }
//   };


//   const filterByAge = () => {
//     return API.filter((beer) => onlyYear(beer.first_brewed) >= 2011 || onlyYear(beer.first_brewed) <= 2010)
//     // const modernRange = API.filter((beer) => {
//     //   const modernYear = onlyYear(beer.first_brewed);
//     //   return modernYear >= 2011;
//     // });

//     // const classicRange = API.filter((beer) => {
//     //   const classicYear = onlyYear(beer.first_brewed);
//     //   return classicYear <= 2010;
//     // });
 
//   }


//     // filter for ABV

//     const filterByABV = ():Beer[] => {
//       // return API.filter((beer) => beer.abv >= 5.6 || beer.abv <= 5.5);
//       const lowABV = API.filter((beer) => {
//         return beer.abv <= 5.5;
//       });
  
//       const highABV = API.filter((beer) => {
//         return beer.abv >= 5.6;
//       });

//       if(beerABV == "High ABV") {
//         return highABV;
//       } else if (beerABV == "Low ABV")
//         return lowABV;
    
//         return API;
      
//     };

    

//     // filter for acidity

//     const filterByAcidity = () => {
//       return API.filter(
//         (beer) => (beer.ph != null && beer.ph >= 4) || (beer.ph != null && beer.ph <= 3.9)
//       )};
//       // const weakAcid = API.filter((beer) => {
//       //   return beer.ph != null && beer.ph >= 4;
//       // });
      
//       // const strongAcid = API.filter((beer) => {
//       //   return beer.ph != null && beer.ph <= 3.9;
//       // });
      
//     // const filtered = API.filter((beer) => {
//     //   return (
//     //     (beer.ph != null && beer.ph >= 4) || (beer.ph != null && beer.ph <= 3.9) 
//     //     && (beer.abv >= 5.6 || beer.abv <= 5.5) 
//     //     && (onlyYear(beer.first_brewed) >= 2011 || onlyYear(beer.first_brewed) <= 2010) && beer.name.toLowerCase().includes(searchInput)
//     //   )
//     // })
    
//     const filteredBeers = beers.filter((beer) => {
//       return (
//         beer.name.toLowerCase().includes(searchInput) && (beerABV === "" || beer.abv)
//       )
//     })

//   return (
//     <div className="searchbeer">
//       <div className="searchbeer__filter">
//         <SearchBox
//           name="Beers"
//           searchTerm={searchInput}
//           handleInput={handleSearchInput}
//         />
//         <FilterTab handleChange={filterByABV} />
//       </div>
//       <div>
//         {filteredBeers.map((alcohol) => (
//           <Card
//             key={alcohol.id}
//             name={alcohol.name}
//             description={alcohol.description}
//             image={alcohol.image_url ?? fallback}
//             food_pairing={alcohol.food_pairing}
//             brewer_tips={alcohol.brewers_tips}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchBeers;







// import { ChangeEvent, FormEvent, useState } from "react";
// import SearchBox from "../../Components/SearchBox/SearchBox";
// import Card from "../../Components/Card/Card";
// import "./SearchBeers.scss";
// import FilterTab from "../FilterTab/FilterTab";
// import API from "../../Data/API.json";
// import fallback from "../../assets/images/fallback.png";


// const SearchBeers = () => {
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [selectedFilters, setSelectedFilters] = useState<string[]>([])


//   const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
//     const input = event.currentTarget.value.toLowerCase();
//     setSearchInput(input);
//   };
  

//   const handleSearchBeers = API.filter((beer) => {
//     return beer.name.toLowerCase().includes(searchInput);
//   });



  
//   // if Punk API worked
//   // const getBeers = async () => {
//   //   const url = ""
//   //   const res = await fetch(url);
//   //   const data = await res.json();
//   //   setBeerFilter(data.results)
//   // }

//   const onlyYear = (date: string): number => {
//     const splitDate = date.split("/").pop();
//     if (splitDate) {
//       const dateAsNum = parseFloat(splitDate);
//       return dateAsNum;
//     } else {
//       throw new Error("Invalid date format");
//     }
//   };


//   const filterByAge = () => {
//     return API.filter((beer) => onlyYear(beer.first_brewed) >= 2011 || onlyYear(beer.first_brewed) <= 2010)}
//     // const modernRange = API.filter((beer) => {
//     //   const modernYear = onlyYear(beer.first_brewed);
//     //   return modernYear >= 2011;
//     // });

//     // const classicRange = API.filter((beer) => {
//     //   const classicYear = onlyYear(beer.first_brewed);
//     //   return classicYear <= 2010;
//     // });
 
  

//     // filter for ABV

//     const filterByABV = () => {
//       return API.filter((beer) => beer.abv >= 5.6 || beer.abv <= 5.5)};
//       // const lowABV = API.filter((beer) => {
//       //   return beer.abv <= 5.5;
//       // });
  
//       // const highABV = API.filter((beer) => {
//       //   return beer.abv >= 5.6;
//       // });

  


//     // filter for acidity

//     const filterByAcidity = () => {
//       return API.filter(
//         (beer) => (beer.ph != null && beer.ph >= 4) || (beer.ph != null && beer.ph <= 3.9)
//       )};
//       // const weakAcid = API.filter((beer) => {
//       //   return beer.ph != null && beer.ph >= 4;
//       // });
      
//       // const strongAcid = API.filter((beer) => {
//       //   return beer.ph != null && beer.ph <= 3.9;
//       // });
      
//     // const filtered = API.filter((beer) => {
//     //   return (
//     //     (beer.ph != null && beer.ph >= 4) || (beer.ph != null && beer.ph <= 3.9) 
//     //     && (beer.abv >= 5.6 || beer.abv <= 5.5) 
//     //     && (onlyYear(beer.first_brewed) >= 2011 || onlyYear(beer.first_brewed) <= 2010) && beer.name.toLowerCase().includes(searchInput)
//     //   )
//     // })
    
  
  

//   return (
//     <div className="searchbeer">
//       <div className="searchbeer__filter">
//         <SearchBox
//           name="Beers"
//           searchTerm={searchInput}
//           handleInput={handleSearchInput}
//         />
//         <FilterTab handleChange={filterByAcidity} />
//       </div>
//       <div>
//         {handleSearchBeers.map((alcohol) => (
//           <Card
//             key={alcohol.id}
//             name={alcohol.name}
//             description={alcohol.description}
//             image={alcohol.image_url ?? fallback}
//             food_pairing={alcohol.food_pairing}
//             brewer_tips={alcohol.brewers_tips}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchBeers;







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
            filtered = filtered.filter((beer) => beer.abv >= 10.1 && beer.abv <= 20)
          } else if (filter === "StrongAcid"){
            filtered = filtered.filter(
              (beer) => (beer.ph != null && beer.ph >= 1 && beer.ph <= 3.5)
            );
          } else if (filter === "WeakAcid") {
            filtered = filtered.filter((beer) => beer.ph !== null && beer.ph >= 3.6 && beer.ph <= 6 )
          } else if (filter === "Modern") {
            filtered = filtered.filter(
              (beer) => (onlyYear(beer.first_brewed) >= 2011));
            } else if( filter === "Classic") {
              filtered = filtered.filter((beer) => onlyYear(beer.first_brewed) <= 2010)
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
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBeers;
