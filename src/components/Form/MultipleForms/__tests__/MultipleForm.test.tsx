import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Form } from "forms/form.types";
import MultipleForm from "../MultipleForm";

const mockSubmit = jest.fn();

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
            required: false,
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
            required: false,
            placeholder: "mock",
            type: "text",
            value: "mock value",
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
    const continueButton = screen.getByRole("button");
    fireEvent.click(continueButton);
    const submit = screen.getByText("Finalizar");
    fireEvent.click(submit);
    await waitFor(() => {
      expect(mockSubmit).toBeCalled();
    });
  });
});
