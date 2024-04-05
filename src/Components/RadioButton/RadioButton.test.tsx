import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioButton from "./RadioButton";
import { ChangeEvent } from "react";

describe("should render radio buttons", () => {
  render(
    <RadioButton
      label={"Test Label"}
      value={"Test Value"}
      groupName={"Test GroupName"}
      handleChange={function (_event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
      }}
    />
  );

//   it("should render label", () => {
//     const buttonLabel = screen.getByRole("label", {name: /Test Label/});
//     expect(buttonLabel).toBeInTheDocument()
//   })


});
