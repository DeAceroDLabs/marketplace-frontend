import { render, waitFor, screen } from "@testing-library/react";
import { UserProvider } from "config/userContext";
import { BrowserRouter } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("ProtectedRoute", () => {
  it("Navigate to route if no user present", async () => {
    const mockUSer = {
      username: "",
      setUser: jest.fn(),
    };
    render(
      <UserProvider value={mockUSer}>
        <BrowserRouter>
          <ProtectedRoute />
        </BrowserRouter>
      </UserProvider>
    );
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });

  it("Renders Children if user present", async () => {
    const mockUSer = {
      username: "mock_user",
      setUser: jest.fn(),
    };
    render(
      <UserProvider value={mockUSer}>
        <BrowserRouter>
          <ProtectedRoute>
            <div>mock</div>
          </ProtectedRoute>
        </BrowserRouter>
      </UserProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("mock")).toBeInTheDocument();
    });
  });
});
