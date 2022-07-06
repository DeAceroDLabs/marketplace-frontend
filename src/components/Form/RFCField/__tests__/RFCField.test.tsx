import { render } from "@testing-library/react";
import { Option } from "forms/form.types";
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
  const setup = (options: Option[]) => {
    return render(
      <RFCField
        label={"Mock RFCField"}
        required={false}
        placeholder={"AAAA000000BBB0C0"}
        type={"rfc"}
        value={"mock value"}
        name={"mock name"}
        errorMessage={"mock message"}
      />
    );
  };

  it("renders RFCField with no options without problem", () => {
    const view = setup([]);
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input", async () => {
    const view = setup([]);
    const input = screen.getByPlaceholderText("AAAA000000BBB0C0");
    fireEvent.change(input, {
      target: { value: "AAAA000000BBB0C1" },
    });
    await waitFor(() => {
        expect((input as HTMLInputElement).value).toBe("AAAA000000BBB0C1");
    });
  });
});
