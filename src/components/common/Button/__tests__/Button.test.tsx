import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "../Button";

describe("c", () => {
  it("user-icon renders on Button without problem", () => {
    render(
      <MemoryRouter>
        <Button
          link="/login"
          variant="primary"
          text="Hola,"
          secondaryText="Ingresa"
        ></Button>
      </MemoryRouter>
    );
    const userIcon = screen.getByText("Hola,");
    expect(userIcon).toBeInTheDocument();
  });
});
