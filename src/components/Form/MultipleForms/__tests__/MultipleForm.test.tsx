import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Form } from "forms/form.types";
import MultipleForm from "../MultipleForm";

const mockSubmit = jest.fn();

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
    handleSubmit: () => mockSubmit,
    formState: { errors: {} },
    clearErrors: () => jest.fn(),
    setValue: () => jest.fn(),
    trigger: () => jest.fn(),
  }),
}));

describe("MultipleForm", () => {
  const props = {
    inputForms: [
      {
        formTitle: "Mock Form 1",
        formDescription: "Mock description",
        fields: [
          {
            name: "mockName",
            label: "mock Label",
            required: true,
            placeholder: "mock",
            type: "text",
            value: "mock value",
          },
        ],
      },
      {
        formTitle: "Mock Form 2",
        formDescription: "Mock description",
        fields: [
          {
            name: "mockName",
            label: "mock Label",
            required: true,
            placeholder: "mock",
            type: "text",
            value: "mock value",
          },
          {
            name: "taxRfc",
            label: "RFC",
            required: true,
            placeholder: "AAAA000000BBB0C0",
            type: "rfc",
            errorMessage: "Por favor ingresa tu RFC completo con 13 caracteres",
          },
        ],
      },
    ] as Form[],
    onSubmit: mockSubmit,
  };
  it("loads MultipleForm without exploding", () => {
    const view = render(<MultipleForm {...props} />);
    expect(view).toMatchSnapshot();
  });

  it("simulates moving to next form", async () => {
    render(<MultipleForm {...props} />);
    const continueButton = screen.getByRole("button");
    fireEvent.click(continueButton);
    await waitFor(() => {
      const backButton = screen.getByTestId("ArrowBackIosNewIcon");
      expect(backButton).toBeInTheDocument();
    });
  });

  it("simulates moving to previous form", async () => {
    render(<MultipleForm {...props} />);
    const continueButton = screen.getByRole("button");
    fireEvent.click(continueButton);
    await waitFor(() => {
      const backButton = screen.getByTestId("ArrowBackIosNewIcon");
      expect(backButton).toBeInTheDocument();
    });
    const backButton = screen.getByTestId("ArrowBackIosNewIcon");
    fireEvent.click(backButton);
    await waitFor(() => {
      const backButton = screen.getByText("siguiente");
      expect(backButton).toBeInTheDocument();
    });
  });

  it("simulates clicking on submit", async () => {
    render(<MultipleForm {...props} />);
    const input = screen.getByPlaceholderText("mock");
    fireEvent.change(input, {
      target: { value: "Mock something" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("Mock something");
    });
    const continueButton = screen.getByRole("button");
    fireEvent.click(continueButton);
    let submit = null as unknown as HTMLElement;
    await waitFor(() => {
      submit = screen.getByText("Finalizar");
    });
    fireEvent.click(submit);
    expect(mockSubmit).toBeCalled();
  });

  it("simulates clicking with error on submit", async () => {
    render(<MultipleForm {...props} />);
    let input = screen.getByPlaceholderText("mock");
    fireEvent.change(input, {
      target: { value: "Mock something" },
    });
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe("Mock something");
    });
    const continueButton = screen.getByRole("button");
    fireEvent.click(continueButton);
    await waitFor(() => {
      input = screen.getByPlaceholderText("AAAA000000BBB0C0");
    });
    fireEvent.change(input, {
      target: { value: "AAAA000000BBB0C1" },
    });
    expect((input as HTMLInputElement).value).toBe("AAAA000000BBB0C1");
    expect(
      screen.getByText("Por favor ingresa tu RFC completo con 13 caracteres")
    ).toBeInTheDocument();
  });
});
