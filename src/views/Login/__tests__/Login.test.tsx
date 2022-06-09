import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { UserProvider } from "config/userContext";
import { BrowserRouter } from "react-router-dom";
import Login from "../Login";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
    handleSubmit: () => jest.fn(),
  }),
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

    const username = screen.getByPlaceholderText("Usuario");
    fireEvent.change(username, {
      target: { value: "mock_username" },
    });
    await waitFor(() => {
      expect((username as HTMLInputElement).value).toBe("mock_username");
    });

    const password = screen.getByPlaceholderText("Contraseña");
    fireEvent.change(password, {
      target: { value: "mock_password" },
    });
    await waitFor(() => {
      expect((password as HTMLInputElement).value).toBe("mock_password");
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
