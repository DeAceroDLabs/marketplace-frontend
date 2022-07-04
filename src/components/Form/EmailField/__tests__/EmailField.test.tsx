import { render } from "@testing-library/react";
import { Option } from "forms/form.types";
import EmailField from "../EmailField";
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

describe("EmailField", () => {
  const setup = (options: Option[]) => {
    return render(
      <EmailField
        label={"Mock EmailField"}
        required={false}
        placeholder={"ejemplo@deacero.com"}
        type={"dropdown"}
        value={"mock value"}
        name={"mock name"}
        message={"mock message"}
        validateDomain={"mock validateDomain"}
      />
    );
  };

  it("renders EmailField with no options without problem", () => {
    const view = setup([]);
    expect(view).toMatchSnapshot();
  });

  it("simulates change on input", async () => {
    const view = setup([]);
    const input = screen.getByPlaceholderText("ejemplo@deacero.com");
    fireEvent.change(input, {
      target: { value: "ejemplo2@notdeacero.com" },
    });
    await waitFor(() => {
        expect((input as HTMLInputElement).value).toBe("ejemplo2@notdeacero.com");
    });
  });
});
