import Button from "../../Components/Button/Button";
import { useState } from "react";
import RadioButton from "../../Components/RadioButton/RadioButton";
import "./FilterTab.scss";

type FilterTabProps = {
  handleChange: (filterType: string) => void;
};

const FilterTab = ({ handleChange }: FilterTabProps) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="filter-tab">
      <div className="filter-tab__button" onClick={handleClick}>
        <Button label="Filter" />
      </div>
      <div className="filter__container">
        {showFilter && (
          <div className="filter-options">
            <div className="filter-options__container filter-options__container--first-brewed">
              <h4 className="filter-options__heading">First Brewed</h4>
              <RadioButton
                handleChange={() => handleChange("Modern")}
                label="Modern Range"
                groupName="firstBrewed"
                value="Modern Range"
              />
              <RadioButton
                handleChange={() => handleChange("Classic")}
                label="Classic Range"
                groupName="firstBrewed"
                value="Classic Range"
              />
            </div>
            <div className="filter-options__container filter-options__container--ABV">
              <h4 className="filter-options__heading">Alcohol By Volume </h4>
              <RadioButton
                handleChange={() => handleChange("LowABV")}
                label="4% - 10%"
                groupName="ABV"
                value="High ABV"
              />
              <RadioButton
                handleChange={() => handleChange("HighABV")}
                label="10.1% - 15%"
                groupName="ABV"
                value="Low ABV"
              />
              <RadioButton
                handleChange={() => handleChange("HigherABV")}
                label="> 15.1%"
                groupName="ABV"
                value="Low ABV"
              />
            </div>
            <div className="filter-options__container filter-options__container--acid">
              <h4 className="filter-options__heading">Acidity</h4>
              <RadioButton
                handleChange={() => handleChange("StrongAcid")}
                label="Strong Acid"
                groupName="acid"
                value="Strong Acid"
              />
              <RadioButton
                handleChange={() => handleChange("WeakAcidity")}
                label="Weak Acid"
                groupName="acid"
                value="Weak Acid"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterTab;
