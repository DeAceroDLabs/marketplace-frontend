import { render } from "@testing-library/react";
import RFCField from "../RFCField";
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

describe("RFCField", () => {
  const setup = () => {
    return render(
      <RFCField
        label={"Mock RFCField"}
        required={true}
        placeholder={"AAAA000000BBB0C0"}
        type={"rfc"}
        value={"mock value"}
        name={"mock name"}
        errorMessage={"mock error message"}
      />
    );
  };

  it("renders RFCField without problem", () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input with error", async () => {
    setup();
    const input = screen.getByPlaceholderText("AAAA000000BBB0C0");
    fireEvent.change(input, {
      target: { value: "AAAA000000BBB0C1" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("AAAA000000BBB0C1");
      expect(screen.queryByText("mock error message")).toBeInTheDocument();
    });
  });

  it("simulates change on input without error", async () => {
    setup();
    const input = screen.getByPlaceholderText("AAAA000000BBB0C0");
    fireEvent.change(input, {
      target: { value: "DEA7103086X2" },
    });
    await waitFor(() => {
      expect(screen.queryByText("mock error message")).not.toBeInTheDocument();
    });
  });

  const setupWithoutErrorMessage = () => {
    return render(
      <RFCField
        label={"Mock RFCField"}
        required={true}
        placeholder={"AAAA000000BBB0C0"}
        type={"rfc"}
        value={"mock value"}
        name={"mock name"}
      />
    );
  };

  it("simulates change on input with not error", async () => {
    setupWithoutErrorMessage();
    const input = screen.getByPlaceholderText("AAAA000000BBB0C0");
    fireEvent.change(input, {
      target: { value: "123" },
    });
    await waitFor(() => {
      expect(screen.queryByText("mock error message")).not.toBeInTheDocument();
    });
  });

});
