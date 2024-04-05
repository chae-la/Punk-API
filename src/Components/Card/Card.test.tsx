import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

describe("should render card", () => {
  render(
    <Card
      name={"Test Name"}
      description={"Test Description"}
      image={"test-image.jpg"}
      food_pairing={["test"]}
      brewer_tips={"Test Brewer Tips"}
      abv={0}
      firstBrewed={"Test Date"}
      acid={0}
    />
  );
  it("should render the contents on the card", () => {
    const cardImage = screen.getByRole("img");
    const cardHeading = screen.getByRole("heading", { name: /Test Name/i });
    const cardDescription = screen.getByText(/Test Description/i);

    expect(cardDescription).toBeInTheDocument();
    expect(cardHeading).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
  });

  it("should show back of the card when more button is clicked", async () => {
    render(
      <Card
        name={"Test Name"}
        description={"Test Description"} 
        image={"test-image.jpg"}
        food_pairing={["test"]}
        brewer_tips={"Test Brewer Tips"}
        abv={0}
        firstBrewed={"Test Date"}
        acid={0}
      />
    );

    const button = screen.getByRole("button", { name: /More/i });
    await userEvent.click(button);

    const backContent = screen.getByText(/Test Brewer Tips/i);
    expect(backContent).toBeTruthy();
  });

  it("should show more content if the more button is pressed", async () => {
    render(<Card
        name={"Test Name"}
        description={"Test Description"} 
        image={"test-image.jpg"}
        food_pairing={["test"]}
        brewer_tips={"Test Brewer Tips"}
        abv={0}
        firstBrewed={"Test Date"}
        acid={0}
      />
    );

    const button = screen.getByRole("button", { name: /More.../i });
    await userEvent.click(button);
    
    const backBrewerTips = screen.getByText(/Test Brewer Tips/i);
    expect(backBrewerTips).toBeInTheDocument(); 
});
 
});
