import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

it("should render the basic information on the card", () => {
  render(
    <Card
      name={""}
      description={""}
      image={""}
      food_pairing={[]}
      brewer_tips={""}
      abv={0}
      firstBrewed={""}
      acid={0}
    />
  );

//   const cardContent = screen.getByRole("");
});
