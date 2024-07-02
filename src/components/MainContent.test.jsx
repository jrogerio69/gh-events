import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MainContent from "./MainContent";

// My tests
// Add yet another comment
// To see if the user jrogerio69 is doing the commit command
// Change the global user.name and user.email to jrogerio69

describe("MainContent", () => {
  it("should render a button", () => {
    render(<MainContent />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should show the help area after clicking the button", async () => {
    render(<MainContent />);

    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.getByTestId("help-area")).toBeInTheDocument();
  });
});
