import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "../Button";

describe("c", () => {
  it("renders welcome on Button without problem", () => {
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
    const welcome = screen.getByText("Hola,");
    expect(welcome).toBeInTheDocument();
  });
});
