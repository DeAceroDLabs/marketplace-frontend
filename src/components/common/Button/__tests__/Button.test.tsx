import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Button from "../Button";
import PersonIcon from "@mui/icons-material/Person";

describe("c", () => {
  it("renders welcome on Button without problem", () => {
    render(
      <MemoryRouter>
        <Button
          color="primary"
          action={() => {
            useNavigate()(`/login`);
          }}
        >
          <PersonIcon sx={{ fontSize: 38 }} />
          <div>
            Hola,&nbsp;
            <b>Ingresa</b>
          </div>
        </Button>
      </MemoryRouter>
    );
    const welcome = screen.getByText("Hola,");
    expect(welcome).toBeInTheDocument();
  });
});
