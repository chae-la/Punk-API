import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import userEvent from "@testing-library/user-event";

describe("should render content in Nav", () => {
    render(<Nav />);
  it("should render image of an arrow on load", () => {

    const navImg = screen.getByRole("img");
    expect(navImg).toBeInTheDocument();
  });

  it("should take user up to the top of the page when clicked", async () => {
    render(<Nav/>);
    const image = screen.getByRole("img");
    await userEvent.click(image);
    expect(window.scrollY).toBe(0);
  })
});
