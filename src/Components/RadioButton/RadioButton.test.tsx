import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";
import { ChangeEvent } from "react";
import userEvent from "@testing-library/user-event";

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
    const buttonLabel = screen.getByText(/Test Label/i);
    expect(buttonLabel).toBeInTheDocument();
  });

  it("should be empty before selection", async () => {
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
    const uncheckedInput = screen.getByRole("checkbox", {
      name: /Test Label/i,
    });
    expect(uncheckedInput).not.toBeChecked();
  });

  it("should be checked when clicked on", async () => {
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
    const checkedInput = screen.getByRole("checkbox", { name: /Test Label/i });
    await userEvent.click(checkedInput);
    expect(checkedInput).toBeChecked();
  });
});
