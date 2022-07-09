import { render } from "@testing-library/react";
import FileInput from "../FileInput";
import { fireEvent, screen, waitFor } from "@testing-library/react";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
    handleSubmit: () => jest.fn(),
    errors: () => jest.fn(),
    formState: { errors: {} },
    watch: () => jest.fn(),
  }),
}));

let file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });

beforeEach(() => {
  file;
});

describe("FileInput", () => {
  const setup = () => {
    return render(
      <FileInput
        label={"Mock FileInput"}
        required={true}
        placeholder={"upload"}
        type={"file"}
        value={"mock value"}
        name={"FileInput"}
      />
    );
  };

  it("renders FileInput with domain without problem", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  it("simulates upload file", async () => {
    setup();
    const input = screen.getByLabelText("Cargar Archivo");
    fireEvent.change(input, {
      target: { files: [file] },
    });
    await waitFor(() => {
        expect(screen.queryByText("Este campo es requerido")).not.toBeInTheDocument();
    });
  });
  
});
