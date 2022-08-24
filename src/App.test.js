import { cleanup, render } from "@testing-library/react";
import App from "./App";
import { percentCalc } from "./helper";

afterEach(cleanup);

describe("Calculator tests", () => {
  test('percent calculate', () => {
    expect(percentCalc(7,100)).toBe(7);
  });
 })

it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

