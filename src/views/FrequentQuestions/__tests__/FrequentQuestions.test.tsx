import renderer from "react-test-renderer";
import FrequentQuestions from "../FrequentQuestions";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "config/userContext";

window.scrollTo = jest.fn();

describe("Frequent asked questions", () => {
  const mockUSer = {
    username: "mock_user",
    setUser: jest.fn(),
  };
  const renderView = () =>
    render(
      <UserProvider value={mockUSer}>
        <MemoryRouter>
          <FrequentQuestions />
        </MemoryRouter>
      </UserProvider>
    );

  it("renders FrequentQuestions with no issue", () => {
    const component = renderer.create(<FrequentQuestions />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders FrequentQuestions scroll up", async () => {
    renderView();
    await waitFor(() => {
      expect(window.scrollTo).toBeCalled();
    });
  });

});
