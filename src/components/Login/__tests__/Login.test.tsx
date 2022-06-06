import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { UserProvider } from "config/userContext";
import { BrowserRouter } from "react-router-dom";
import Login from "../Login";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Login", () => {
  it("loads login without exploding", () => {
    const view = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("simulates login", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const input = screen.getByPlaceholderText("username");
    fireEvent.change(input, {
      target: { value: "mock_username" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("mock_username");
    });

    const loginButton = screen.getByRole("button");
    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });

  it("simulates user already on context", async () => {
    const mockUSer = {
      username: "mock_user",
      setUser: jest.fn(),
    };

    render(
      <UserProvider value={mockUSer}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </UserProvider>
    );
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });
});
