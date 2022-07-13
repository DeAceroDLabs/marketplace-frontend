import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "../Signup";

const mockedSubmit = jest.fn();

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: () => ({
    register: () => jest.fn(),
    handleSubmit: () => mockedSubmit,
    errors: () => jest.fn(),
    formState: { errors: {} },
    clearErrors: () => jest.fn(),
  }),
}));

describe("Signup", () => {
  const renderView =  () => render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  it("loads login without exploding", () => {
    renderView();
    expect(renderView()).toMatchSnapshot();
  });

});
