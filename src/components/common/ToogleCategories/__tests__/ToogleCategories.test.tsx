import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ToogleCategories from "../ToogleCategories";

describe("ToogleCategories", () => {
  const view = render(
      <ToogleCategories
        categoryName="Mock categoryName"
        question="Mock question"
        content="Mock content"
      />
  );

  it("renders ToogleCategories with no issue", () => {
    expect(view).toMatchSnapshot();
  });

  it("arrow button calls handleVisibility", async () => {
    render(
        <ToogleCategories
          categoryName="Mock categoryName"
          question="Mock question"
          content="Mock content"
        />
    );
    const arrowButton = screen.getByRole("button");
    fireEvent.click(arrowButton);
    await waitFor(() => {
        expect(screen.getByText("Mock content")).toBeInTheDocument();
    });
  });
});
