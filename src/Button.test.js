import { cleanup, render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

afterEach(cleanup);

describe('Test Button component', () => {
    it('Test click event', () => {
      const setRandomData = jest.fn();
  
      const { queryByText } = render(<Button setRandomData={setRandomData}>Random</Button>);
      const button = queryByText("Random");
      fireEvent.click(button);
  
      expect(setRandomData).toHaveBeenCalledTimes(1);
    });
  });

  it("renders", () => {
    const setRandomData = jest.fn();
    const { asFragment } = render(<Button setRandomData={setRandomData}/>);
    expect(asFragment()).toMatchSnapshot();
  });