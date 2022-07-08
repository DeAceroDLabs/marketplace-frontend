import { render } from "@testing-library/react";
import { Option } from "forms/form.types";
import PhoneField from "../PhoneField";
import { fireEvent, screen, waitFor } from "@testing-library/react";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
    handleSubmit: () => jest.fn(),
    errors: () => jest.fn(),
    formState: { errors: {} },
  }),
}));

describe("PhoneField", () => {
  const setup = (options: Option[]) => {
    return render(
      <PhoneField
        label={"Mock PhoneField"}
        required={false}
        placeholder={"+52 (000)-1111-222"}
        type={"number"}
        value={"mock value"}
        name={"mock name"}
        errorMessage={"mock error message"}
      />
    );
  };

  it("renders PhoneField with no options without problem", () => {
    const view = setup([]);
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input with error", async () => {
    const view = setup([]);
    const input = screen.getByPlaceholderText("+52 (000)-1111-222");
    fireEvent.change(input, {
      target: { value: "12345678" },
    });
    await waitFor(() => {
      expect(screen.getByText("mock error message")).toBeInTheDocument();
    });
  });

  it("simulates change on input no error", async () => {
    const view = setup([]);
    const input = screen.getByPlaceholderText("+52 (000)-1111-222");
    fireEvent.change(input, {
      target: { value: "1234567890" },
    });
    await waitFor(() => {
      expect(screen.queryByText("mock error message")).not.toBeInTheDocument();
    });
  });

  const setupWithoutErrorMessage = (options: Option[]) => {
    return render(
      <PhoneField
        label={"Mock PhoneField"}
        required={false}
        placeholder={"+52 (000)-1111-222"}
        type={"number"}
        value={"mock value"}
        name={"mock name"}
      />
    );
  };

  it("simulates change on input with not error", async () => {
    const view = setupWithoutErrorMessage([]);
    const input = screen.getByPlaceholderText("+52 (000)-1111-222");
    fireEvent.change(input, {
      target: { value: "123" },
    });
    await waitFor(() => {
        expect(screen.queryByText("mock error message")).not.toBeInTheDocument();
      });
  });
  
});
