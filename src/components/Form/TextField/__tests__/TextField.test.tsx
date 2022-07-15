import { render } from "@testing-library/react";
import TextField from "../TextField";
import { fireEvent, screen, waitFor } from "@testing-library/react";

const mockSubmit = jest.fn();

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
    handleSubmit: () => mockSubmit,
    errors: () => jest.fn(),
    formState: { errors: {} },
    clearErrors: () => jest.fn(),
    setValue: () => jest.fn(),
  }),
}));

describe("TextField", () => {
  const setup = () => {
    return render(
      <TextField
        label={"Mock TextField"}
        required={true}
        placeholder={"Mock Placeholder"}
        type={"text"}
        value={"mock value"}
        name={"mock name"}
      />
    );
  };

  it("renders TextField without problem", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input", async () => {
    setup();
    const input = screen.getByPlaceholderText("Mock Placeholder");
    fireEvent.change(input, {
      target: { value: "Mock something" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("Mock something");
    });
  });
});
