import { render } from "@testing-library/react";
import PasswordField from "../PasswordField";
import { fireEvent, screen, waitFor } from "@testing-library/react";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
    handleSubmit: () => jest.fn(),
    errors: () => jest.fn(),
    formState: { errors: {} },
    getValues: () => jest.fn(),
  }),
}));

describe("PasswordField", () => {
  const setup = () => {
    return render(
      <PasswordField
        label={"Mock PasswordField"}
        required={false}
        placeholder={"password"}
        type={"email"}
        value={"mock value"}
        name={"password"}
        errorMessage={"mock error message"}
      />
    );
  };

  it("renders PasswordField with no options without problem", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input", async () => {
    const view = setup();
    const input = screen.getByPlaceholderText("password");
    fireEvent.change(input, {
      target: { value: "password" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("password");
    });
  });

  it("simulates change on input with error", async () => {
    const view = setup();
    const input = screen.getByPlaceholderText("password");
    fireEvent.change(input, {
      target: { value: "password" },
    });
    await waitFor(() => {
      expect(screen.getByText("mock error message")).toBeInTheDocument();
    });
  });

  const setupWithValidation = () => {
    return render(
      <PasswordField
        label={"Mock PasswordField"}
        required={false}
        placeholder={"password"}
        type={"email"}
        value={"mock value"}
        name={"password"}
        errorMessage={"mock error message"}
        needsValidationFrom={"password"}
      />
    );
  };

  it("simulates change on input with validation", async () => {
    const view = setupWithValidation();
    const input = screen.getByPlaceholderText("password");
    fireEvent.change(input, {
      target: { value: "password" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("password");
    });
  });
});
