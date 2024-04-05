import { render, screen } from "@testing-library/react";
import FilterTab from "./FilterTab";
import userEvent from "@testing-library/user-event";

describe("should render the filter tab", () => {
  it("should render the filter options after pressing the button", async () => {
    render(
      <FilterTab
        handleChange={function (_filterType: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const button = screen.getByRole("button", { name: /Filter/i });
    await userEvent.click(button);

    const filterOptions = screen.getByText(/Strong Acid/i);
    expect(filterOptions).toBeInTheDocument();
  });

  it("should not show the filter options when the filter tab is pressed again to close it", async () => {
    render(
      <FilterTab
        handleChange={function (_filterType: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const filterButton = screen.getByRole("button", { name: /Filter/i });
    await userEvent.click(filterButton);

    const filterOptions = screen.queryByText(/Modern Range/i);
    expect(filterOptions).toBeInTheDocument();

    await userEvent.click(filterButton);

    const closedFilterOptions = screen.queryByText(/Modern Range/i);
    expect(closedFilterOptions).not.toBeInTheDocument();
  });
});
