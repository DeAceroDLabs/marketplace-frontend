import renderer from "react-test-renderer";
import AboutUs from "../AboutUs";
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
          <AboutUs />
        </MemoryRouter>
      </UserProvider>
    );

  it("renders AboutUs with no issue", () => {
    const component = renderer.create(<AboutUs />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders AboutUs scroll up", async () => {
    renderView();
    await waitFor(() => {
      expect(window.scrollTo).toBeCalled();
    });
  });
});
