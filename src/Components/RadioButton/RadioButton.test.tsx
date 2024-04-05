import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";
import { ChangeEvent } from "react";

describe("should render radio buttons", () => {
  it("should render label", () => {
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
    const buttonLabel = screen.getByText(/Test Label/i );
    expect(buttonLabel).toBeInTheDocument();
  });
});
