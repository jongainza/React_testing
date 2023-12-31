import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import image1 from "./image1.jpg";

it("should render without crashing", () => {
  render(<Card caption="test" src={image1} currNum={1} totalNum={2} />);
});

it("Should matches snapshots", () => {
  const { asFragment } = render(
    <Card caption="test" src={image1} currNum={1} totalNum={2} />
  );
  expect(asFragment()).toMatchSnapshot();
});
