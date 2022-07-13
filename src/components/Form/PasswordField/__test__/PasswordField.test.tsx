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
    clearErrors: () => jest.fn(),
  }),
}));

describe("PasswordField", () => {
  const setup = () => {
    return render(
      <PasswordField
        label={"Mock PasswordField"}
        required={true}
        placeholder={"password"}
        type={"password"}
        value={"mock value"}
        name={"password"}
        errorMessage={"mock error message"}
      />
    );
  };

  it("renders PasswordField without problem", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input with error", async () => {
    setup();
    const input = screen.getByPlaceholderText("password");
    fireEvent.change(input, {
      target: { value: "password" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("password");
      expect(screen.getByText("mock error message")).toBeInTheDocument();
    });
  });

  it("simulates change on input without error", async () => {
    setup();
    const input = screen.getByPlaceholderText("password");
    fireEvent.change(input, {
      target: { value: "Password123@" },
    });
    await waitFor(() => {
      expect(screen.queryByText("mock error message")).not.toBeInTheDocument();
    });
  });

  it("simulates paste with prevent", async () => {
    setup();
    const input = screen.getByPlaceholderText("password");
    const isPrevented = fireEvent.paste(input, { target: { value: "4321" } });
    await waitFor(() => {
      expect(isPrevented).toBe(false);
    });
  });

  it("simulates copy with prevent", async () => {
    setup();
    const input = screen.getByPlaceholderText("password");
    const isPrevented = fireEvent.copy(input, { target: { value: "4321" } });
    await waitFor(() => {
      expect(isPrevented).toBe(false);
    });
  });

  const setupWithValidation = () => {
    return render(
      <div>
        <PasswordField
          label={"Mock PasswordField"}
          required={true}
          placeholder={"password"}
          type={"password"}
          value={"mock value"}
          name={"password"}
          errorMessage={"mock error message"}
        />
        <PasswordField
          label={"Mock Confirm PasswordField"}
          required={true}
          placeholder={"confirmPassword"}
          type={"password"}
          value={"mock value"}
          name={"confirmpassword"}
          errorMessage={"mock confirmation error message"}
          needsValidationFrom={"password"}
        />
      </div>
    );
  };

  it("simulates change on input with validation and error", async () => {
    setupWithValidation();
    const inputPassword = screen.getByPlaceholderText("password");
    fireEvent.change(inputPassword, {
      target: { value: "Password123@" },
    });
    const inputConfirmPassword = screen.getByPlaceholderText("confirmPassword");
    fireEvent.change(inputConfirmPassword, {
      target: { value: "otherPassword" },
    });
    
    await waitFor(() => {
      expect((inputConfirmPassword as HTMLInputElement).value).toBe("otherPassword");
      expect(screen.getByText("mock confirmation error message")).toBeInTheDocument();
    });
  });

});
