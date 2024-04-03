// import API from "../../Data/API.json"
// import Button from "../../Components/Button/Button";
// import { ChangeEventHandler, useState } from "react";
// import RadioButton from "../../Components/RadioButton/RadioButton";
// import "./FilterTab.scss"

// type FilterTabProps = {
//   handleChange: ChangeEventHandler<HTMLInputElement>;
// }

// const FilterTab = ({handleChange} : FilterTabProps) => {
//     const [showFilter, setShowFilter] = useState<boolean>(false);
//     const handleClick = () => {
//         setShowFilter(!showFilter)
//     }
    

//   // //filter for first brewed
//   // const onlyYear = (date: string): number => {
//   //   const splitDate = date.split("/").pop();
//   //   if (splitDate) {
//   //     const dateAsNum = parseFloat(splitDate);
//   //     return dateAsNum;
//   //   } else {
//   //     throw new Error("Invalid date format or empty input");
//   //   }
//   // };

//   // const modernRange = API.filter((beer) => {
//   //   const modernYear = onlyYear(beer.first_brewed);
//   //   return modernYear >= 2011;
//   // });

//   // const classicRange = API.filter((beer) => {
//   //   const classicYear = onlyYear(beer.first_brewed);
//   //   return classicYear <= 2010;
//   // });

//   // // filter for ABV
//   // const lowABV = API.filter((beer) => {
//   //   return beer.abv <= 5.5;
//   // });

//   // const highABV = API.filter((beer) => {
//   //   return beer.abv >= 5.6;
//   // });

//   // // filter for acidity
//   // const strongAcid = API.filter((beer) => {
//   //   return beer.ph != null && beer.ph <= 3.9 ;
//   // });

//   // const weakAcid = API.filter((beer) => {
//   //   return beer.ph != null && beer.ph >= 4;
//   // });


//   return(
//     <div className="filter-tab" >
//         <div className="filter-tab__button" onClick={handleClick}>
//         <Button label="Filter"/>
//         </div>
//         <div className="filter__container">
//             {showFilter && (
//             <div className="filter-options" >
//                 <div className="filter-options__container filter-options__container--first-brewed">
//                     <h4 className="filter-options__heading">First Brewed</h4>
//                     <RadioButton handleChange={handleChange} label="Modern Range" groupName="firstBrewed" value="Modern Range" />
//                     <RadioButton handleChange={handleChange} label="Classic Range" groupName="firstBrewed" value="Classic Range" />
//                 </div>
//                 <div className="filter-options__container filter-options__container--ABV">
//                     <h4 className="filter-options__heading">Alcohol By Volume </h4>
//                     <RadioButton handleChange={handleChange} label="High ABV" groupName="ABV" value="High ABV"/>
//                     <RadioButton handleChange={handleChange} label="Low ABV" groupName="ABV" value="Low ABV"/>
//                 </div>
//                 <div className="filter-options__container filter-options__container--acid">
//                     <h4 className="filter-options__heading">Acidity</h4>
//                     <RadioButton handleChange={handleChange} label="Strong Acid" groupName="acid" value="Strong Acid"/>
//                     <RadioButton handleChange={handleChange} label="Weak Acid" groupName="acid" value="Weak Acid"/>
//                 </div>
//                 <div className="filter-options__container filter-options__container--per-page">
//                     <h4 className="filter-options__heading">Per Page</h4>
//                     <RadioButton handleChange={handleChange} label="All" groupName="per-page" value={API.length}/>
//                     <RadioButton handleChange={handleChange} label="25" groupName="per-page" value={25}/>
//                     <RadioButton handleChange={handleChange} label="50" groupName="per-page" value={50}/>
//                     <RadioButton handleChange={handleChange} label="100" groupName="per-page" value={100}/>
//                 </div> 
//             </div>
//         )}
//         </div>
//     </div>
//   )
// };

// export default FilterTab;


import Button from "../../Components/Button/Button";
import { useState } from "react";
import RadioButton from "../../Components/RadioButton/RadioButton";
import "./FilterTab.scss"
import API from "../../Data/API.json";

type FilterTabProps = {
  handleChange: (filterType: string) => void;
}

const FilterTab = ({handleChange}: FilterTabProps) => {
    const [showFilter, setShowFilter] = useState<boolean>(false);
   

    const handleClick = () => {
        setShowFilter(!showFilter)
    }
   

  return(
    <div className="filter-tab" >
        <div className="filter-tab__button" onClick={handleClick}>
        <Button label="Filter"/>
        </div>
        <div className="filter__container">
            {showFilter && (
            <div className="filter-options" >
                <div className="filter-options__container filter-options__container--first-brewed">
                    <h4 className="filter-options__heading">First Brewed</h4>
                    <RadioButton handleChange={() => handleChange("Modern")} label="Modern Range" groupName="firstBrewed" value="Modern Range" />
                    <RadioButton handleChange={() => handleChange("Classic")} label="Classic Range" groupName="firstBrewed" value="Classic Range" />
                </div>
                <div className="filter-options__container filter-options__container--ABV">
                    <h4 className="filter-options__heading">Alcohol By Volume </h4>
                    <RadioButton handleChange={() => handleChange("LowABV")} label="6% - 10%" groupName="ABV" value="High ABV"/>
                    <RadioButton handleChange={() => handleChange("HighABV")} label="10.1% - 15%" groupName="ABV" value="Low ABV"/>
                </div>
                <div className="filter-options__container filter-options__container--acid">
                    <h4 className="filter-options__heading">Acidity</h4>
                    <RadioButton handleChange={() => handleChange("StrongAcid")} label="Strong Acid" groupName="acid" value="Strong Acid"/>
                    <RadioButton handleChange={() => handleChange("WeakAcidity")} label="Weak Acid" groupName="acid" value="Weak Acid"/>
                </div>
                <div className="filter-options__container filter-options__container--per-page">
                    <h4 className="filter-options__heading">Per Page</h4>
                    <RadioButton handleChange={() => handleChange("per-page")} label="All" groupName="per-page" value={API.length}/>
                    <RadioButton handleChange={() => handleChange("per-page")} label="25" groupName="per-page" value={25}/>
                    <RadioButton handleChange={() => handleChange("per-page")} label="50" groupName="per-page" value={50}/>
                    <RadioButton handleChange={() => handleChange("per-page")} label="100" groupName="per-page" value={100}/>
                </div> 
            </div>
        )}
        </div>
    </div>
  )
};

export default FilterTab;
