import { FormEventHandler } from "react";
import "./SearchBox.scss"

type SearchBoxProps = {
    name: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>
}


const SearchBox = ({name, searchTerm, handleInput} : SearchBoxProps) => {
    return(
        <div className="search-box">
            <input
            placeholder="Explore Our Collection..."
            type="text"
            id={name}
            name={name}
            value={searchTerm}
            onInput={handleInput}
            className="search-box__input"
            />
        </div>
    )
}

export default SearchBox;