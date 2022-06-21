import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";
import { UserProvider } from "config/userContext";
import { act } from "react-dom/test-utils";

const mockUSer = {
  username: "user",
  setUser: jest.fn(),
};

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Footer", () => {
  const renderView = () =>
    render(
      <UserProvider value={mockUSer}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </UserProvider>
    );
  it("renders Footer without problem", async () => {
    expect(renderView()).toMatchSnapshot();
  });

  it("getToKnowUs button useNavigate", async () => {
    renderView();
    const getToKnowUsButton = screen.getAllByRole("button")[0];
    fireEvent.click(getToKnowUsButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });

  it("help button useNavigate", async () => {
    renderView();
    const helpButton = screen.getAllByRole("button")[1];
    fireEvent.click(helpButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });

  it("contact button useNavigate and close it", async () => {
    renderView();
    const contactButton = screen.getAllByRole("button")[2];
    fireEvent.click(contactButton);
    const tooltip = screen.queryByText('Soporte');
    await waitFor(() => {
      expect(tooltip).toBeInTheDocument()
    });
    const outside = screen.getAllByRole("button")[5];

    fireEvent.click(outside);

    await waitFor(() => {
      expect(screen.queryByText('Soporte')).not.toBeInTheDocument();
    });
  });

  it("questions button useNavigate", async () => {
    renderView();
    const questionButton = screen.getAllByRole("button")[3];
    fireEvent.click(questionButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  it("politics button useNavigate", async () => {
    renderView();
    const politicsButton = screen.getAllByRole("button")[4];
    fireEvent.click(politicsButton);
    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalled();
    });
  });

  it("click outside and close tooltip ", async () => {
    const map: any = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    renderView();
    const contactButton = screen.getAllByRole("button")[2];
    fireEvent.click(contactButton);
    expect(screen.queryByText('Soporte')).toBeInTheDocument();
    act(() => {
      map.mousedown({ target: document.createElement('a') });
    });
    expect(screen.queryByText('Soporte')).not.toBeInTheDocument();
    expect(document.addEventListener).toBeCalledTimes(3);
  });
});