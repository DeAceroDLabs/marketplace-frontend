import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Option } from "forms/form.types";
import Dropdown from "../Dropdown";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
    handleSubmit: () => jest.fn(),
    errors: () => jest.fn(),
  }),
}));

describe("Dropdown", () => {
  const setup = (options: Option[]) => {
    return render(
      <Dropdown
        label={"Mock Dropdown"}
        required={false}
        placeholder={"mock placeholder"}
        type={"dropdown"}
        value={"mock value"}
        name={"mock name"}
        options={options}
      />
    );
  };

  it("renders Dropdown with no options without problem", () => {
    const view = setup([]);
    expect(view).toMatchSnapshot();
  });

  it("renders Dropdown with options without problem", () => {
    const mockOptions = [
      {
        label: "Mock Option 1",
        value: "Mock Option 1",
      },
      {
        label: "Mock Option 2",
        value: "Mock Option 2",
      },
    ];
    const view = setup(mockOptions);
    expect(view).toMatchSnapshot();
  });

  it("changes option value", async () => {
    const mockOptions = [
      {
        label: "Mock Option 1",
        value: "Mock Option 1",
      },
      {
        label: "Mock Option 2",
        value: "Mock Option 2",
      },
    ];
    setup(mockOptions);
    const dropdown = screen.getByDisplayValue("Mock Option 1");
    fireEvent.change(dropdown, {
      target: { value: "Mock Option 2" },
    });
    await waitFor(() => {
      expect((dropdown as HTMLInputElement).value).toBe("Mock Option 2");
    });
  });
});
