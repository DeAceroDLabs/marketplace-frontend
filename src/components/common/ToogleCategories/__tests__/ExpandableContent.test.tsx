import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ExpandableContent from "../ExpandableContent";

describe("ExpandableContent", () => {
  const view = render(
    <ExpandableContent title="Mock categoryName">
      <div>Mock content</div>
    </ExpandableContent>
  );

  it("renders ExpandableContent with no issue", () => {
    expect(view).toMatchSnapshot();
  });

  it("arrow button calls handleVisibility", async () => {
    render(
      <ExpandableContent title="Mock categoryName">
      <div>Mock content</div>
    </ExpandableContent>
    );
    const arrowButton = screen.getByRole("button");
    fireEvent.click(arrowButton);
    await waitFor(() => {
      expect(screen.getByText("Mock content")).toBeInTheDocument();
    });
  });
});
