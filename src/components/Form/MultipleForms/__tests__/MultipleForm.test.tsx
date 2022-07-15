import { render } from "@testing-library/react";
import { Form } from "forms/form.types";
import { useForm } from "react-hook-form";
import MultipleForm from "../MultipleForm";

const mockSubmit = jest.fn();

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useForm: () => ({
    register: () => jest.fn(),
    handleSubmit: () => mockSubmit,
    clearErrors: () => mockSubmit,
    setValue: () => jest.fn(),
    formState: { errors: {} },
  }),
}));

describe("MultipleForm", () => {
  const mockUseForm = useForm();
  const props = {
    form: mockUseForm,
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

  // it("simulates moving to next form", async () => {
  //   render(<MultipleForm {...props} />);
  //   const continueButton = screen.getByRole("button");
  //   console.log(continueButton);
  //   fireEvent.click(continueButton);
  //   await waitFor(() => {
  //     const backButton = screen.getByTestId("ArrowBackIosNewIcon");
  //     expect(backButton).toBeInTheDocument();
  //   });
  // });

  // it("simulates moving to previous form", async () => {
  //   render(<MultipleForm {...props} />);
  //   const continueButton = screen.getByRole("button");
  //   fireEvent.click(continueButton);
  //   await waitFor(() => {
  //     const backButton = screen.getByTestId("ArrowBackIosNewIcon");
  //     expect(backButton).toBeInTheDocument();
  //   });
  //   const backButton = screen.getByTestId("ArrowBackIosNewIcon");
  //   fireEvent.click(backButton);
  //   await waitFor(() => {
  //     const backButton = screen.getByText("siguiente");
  //     expect(backButton).toBeInTheDocument();
  //   });
  // });

  // it("simulates clicking on submit", async () => {
  //   render(<MultipleForm {...props} />);
  //   const input = screen.getByPlaceholderText("mock");
  //   fireEvent.change(input, {
  //     target: { value: "Mock something" },
  //   });
  //   await waitFor(() => {
  //     expect((input as HTMLInputElement).value).toBe("Mock something");
  //   });
  //   const continueButton = screen.getByRole("button");
  //   fireEvent.click(continueButton);
  //   await waitFor(() => {
  //     const submit = screen.getByText("Finalizar");
  //     fireEvent.click(submit);
  //     expect(mockSubmit).toBeCalled();
  //   });
  // });

  // it("simulates clicking with error on submit", async () => {
  //   render(<MultipleForm {...props} />);
  //   const input = screen.getByPlaceholderText("mock");
  //   fireEvent.change(input, {
  //     target: { value: "Mock something" },
  //   });
  //   await waitFor(() => {
  //     expect((input as HTMLInputElement).value).toBe("Mock something");
  //   });
  //   const continueButton = screen.getByRole("button");
  //   fireEvent.click(continueButton);
  //   await waitFor(() => {
  //     const submit = screen.getByText("Finalizar");
  //     const input = screen.getByPlaceholderText("AAAA000000BBB0C0");
  //     fireEvent.change(input, {
  //       target: { value: "AAAA000000BBB0C1" },
  //     });
  //     expect((input as HTMLInputElement).value).toBe("AAAA000000BBB0C1");
  //     expect(
  //       screen.queryByText(
  //         "Por favor ingresa tu RFC completo con 13 caracteres"
  //       )
  //     ).toBeInTheDocument();
  //     fireEvent.click(submit);
  //     expect(mockSubmit).not.toBeCalled();
  //   });
  // });
});
