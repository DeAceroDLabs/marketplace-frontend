import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PageNotFound from "../PageNotFound";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "config/userContext";

const mockUSer = {
  username: "user",
  setUser: jest.fn(),
};

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("PageNotFound", () => {
  const renderView = () =>
    render(
      <UserProvider value={mockUSer}>
        <MemoryRouter>
          <PageNotFound />
        </MemoryRouter>
      </UserProvider>
    );
  it("renders PageNotFound without problem", async () => {
    expect(renderView()).toMatchSnapshot();
  });
  it("go to home button useNavigate", async () => {
    renderView();
    const getToKnowUsButton = screen.getByRole("button");
    fireEvent.click(getToKnowUsButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });
});
