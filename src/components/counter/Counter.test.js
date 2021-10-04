import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter />", () => {
  test("render the paragraphs of counter", () => {
    render(<Counter />);
    const p1 = screen.getByText(/I am a counter./);
    expect(p1).toBeInTheDocument();
    const p2 = screen.getByText(/Do you want to try me?/);
    expect(p2).toBeInTheDocument();
  });

  test("render initial counter text", () => {
    render(<Counter />);

    const counterText = screen.getByTestId("counter-text");
    expect(counterText).toHaveTextContent("0");
  });

  test("render counter buttons", () => {
    render(<Counter />);

    const btnDecrement = screen.getByTestId("btn-");
    const btnIncrement = screen.getByTestId("btn+");

    expect(btnDecrement).toBeInTheDocument();
    expect(btnDecrement.textContent).toEqual("-");

    expect(btnIncrement).toBeInTheDocument();
    expect(btnIncrement.textContent).toEqual("+");
  });
});
