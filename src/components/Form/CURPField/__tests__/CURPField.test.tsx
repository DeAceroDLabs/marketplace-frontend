import { render } from "@testing-library/react";
import CURPField from "../CURPField";
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

describe("CURPField", () => {
  const setup = () => {
    return render(
      <CURPField
        label={"Mock CURPField"}
        required={false}
        placeholder={"ABCD990022ABCDEF00"}
        type={"curp"}
        value={"mock value"}
        name={"mock name"}
        errorMessage={"mock error message"}
      />
    );
  };

  it("renders CURPField with no options without problem", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input without error", async () => {
    setup();
    const input = screen.getByPlaceholderText("ABCD990022ABCDEF00");
    fireEvent.change(input, {
      target: { value: "FABM770222MMSJNR00" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("FABM770222MMSJNR00");
      expect(screen.queryByText("mock error message")).not.toBeInTheDocument();
    });
  });

  const setupWithoutErrorMessage = () => {
    return render(
      <CURPField
        label={"Mock CURPField"}
        required={false}
        placeholder={"ABCD990022ABCDEF00"}
        type={"curp"}
        value={"mock value"}
        name={"mock name"}
      />
    );
  };

  it("simulates change on input with not error", async () => {
    setupWithoutErrorMessage();
    const input = screen.getByPlaceholderText("ABCD990022ABCDEF00");
    fireEvent.change(input, {
      target: { value: "123" },
    });
    await waitFor(() => {
      expect(screen.queryByText("mock error message")).not.toBeInTheDocument();
    });
  });
});
