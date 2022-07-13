import { render } from "@testing-library/react";
import EmailField from "../EmailField";
import { fireEvent, screen, waitFor } from "@testing-library/react";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
    handleSubmit: () => jest.fn(),
    errors: () => jest.fn(),
    formState: { errors: {} },
    clearErrors: () => jest.fn(),
  }),
}));

describe("EmailField", () => {
  const setupWithValidationDomain = () => {
    return render(
      <EmailField
        label={"Mock EmailField"}
        required={true}
        placeholder={"ejemplo@deacero.com"}
        type={"email"}
        value={"mock value"}
        name={"mock name"}
        errorMessage={"mock error message"}
        validateDomain={"deacero.com"}
      />
    );
  };

  it("renders EmailField with domain without problem", () => {
    const view = setupWithValidationDomain();
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input with error because it is not the domain", async () => {
    const view = setupWithValidationDomain();
    const input = screen.getByPlaceholderText("ejemplo@deacero.com");
    fireEvent.change(input, {
      target: { value: "ejemplo2@notdeacero.com" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("ejemplo2@notdeacero.com");
      expect(screen.getByText("mock error message")).toBeInTheDocument();
    });
  });

  it("simulates change on input with not error", async () => {
    const view = setupWithValidationDomain();
    const input = screen.getByPlaceholderText("ejemplo@deacero.com");
    fireEvent.change(input, {
      target: { value: "ejemplo2@deacero.com" },
    });
    await waitFor(() => {
      expect(screen.queryByText("mock error message")).not.toBeInTheDocument();
    });
  });

  const setupWithoutValidationDomain = () => {
    return render(
      <EmailField
        label={"Mock EmailField"}
        required={true}
        placeholder={"ejemplo@deacero.com"}
        type={"email"}
        value={"mock value"}
        name={"mock name"}
        errorMessage={"mock error message"}
      />
    );
  };

  it("simulates change on input with error because it is not valid email", async () => {
    const view = setupWithoutValidationDomain();
    const input = screen.getByPlaceholderText("ejemplo@deacero.com");
    fireEvent.change(input, {
      target: { value: "ejemplo2notdeacerocom" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("ejemplo2notdeacerocom");
      expect(screen.getByText("mock error message")).toBeInTheDocument();
    });
  });

  const setupWithoutErrorMessage = () => {
    return render(
      <EmailField
        label={"Mock EmailField"}
        required={true}
        placeholder={"ejemplo@deacero.com"}
        type={"email"}
        value={"mock value"}
        name={"mock name"}
      />
    );
  };

  it("simulates change on input with not error", async () => {
    const view = setupWithoutErrorMessage();
    const input = screen.getByPlaceholderText("ejemplo@deacero.com");
    fireEvent.change(input, {
      target: { value: "ejemplo2deacero.com" },
    });
    await waitFor(() => {
      expect(screen.queryByText("mock error message")).not.toBeInTheDocument();
    });
  });
});
