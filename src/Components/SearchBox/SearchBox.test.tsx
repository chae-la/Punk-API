import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";
import { FormEvent } from "react";

it("should render the placeholder text in the search bar", () => {
  render(
    <SearchBox
      name={""}
      searchTerm={""}
      handleInput={function (_event: FormEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
      }}
    />
  );

  const searchBoxInput = screen.getByPlaceholderText(/Explore Our Collection.../i);
  expect(searchBoxInput).toBeTruthy()
});
