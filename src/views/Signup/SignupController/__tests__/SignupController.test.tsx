import { waitFor, screen, render, fireEvent } from "@testing-library/react";
import MultipleForm from "components/Form/MultipleForms/MultipleForm";
import { DynamicDataProvider } from "config/dynamicDataContext";
import { generalSignupForm } from "forms/Signup/Signup.general";
import { locationSignupForm } from "forms/Signup/Signup.location";
import { taxSignupForm } from "forms/Signup/Signup.tax";
import { FormProvider, useForm } from "react-hook-form";
import mockFetch from "setupTests";
import SignupController from "../SignupController";

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
    watch: () => "12345",
  }),
  useForm: () => ({
    formState: { errors: {} },
    watch: () => jest.fn(),
    setValue: () => jest.fn(),
    handleSubmit: () => mockSubmit,
  }),
}));

describe("SignupController", () => {
  beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders SignupController with no issue", async () => {
    const forms = [generalSignupForm, locationSignupForm, taxSignupForm];
    const formState = useForm();
    const dynamicData = [] as any[];
    const setDynamicData = jest.fn();
    render(
      <DynamicDataProvider value={{ dynamicData, setDynamicData }}>
        <FormProvider {...formState}>
          <SignupController />
          <MultipleForm inputForms={forms} onSubmit={mockSubmit} />
        </FormProvider>
      </DynamicDataProvider>
    );
    const continueButton = screen.getAllByRole("button")[2];
    let zipCodeField = null as unknown as HTMLElement;
    fireEvent.click(continueButton);
    await waitFor(() => {
      zipCodeField = screen.getByPlaceholderText("12345");
      expect(zipCodeField).toBeInTheDocument();
    });
    fireEvent.change(zipCodeField, {
      target: { value: "12345" },
    });
    await waitFor(() => {
      zipCodeField = screen.getByPlaceholderText("12345");
      expect(zipCodeField).toBeInTheDocument();
    });
  });
});
