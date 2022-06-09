import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Suscribing from "../Suscribing";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Suscribing", () => {
  it("renders Suscribing without problem", async () => {
    const view = render(
      <MemoryRouter>
        <Suscribing />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
