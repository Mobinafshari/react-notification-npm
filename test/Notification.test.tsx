import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Notification from "../src/components/Notification";
import userEvent from "@testing-library/user-event";

describe("notification", () => {
  it("should have button for trigger notification", () => {
    render(<Notification />);
    const trigger = screen.getByRole("button");
    expect(trigger).toBeInTheDocument();
  });
  it("should not have toast", () => {
    render(<Notification />);
    const notification = screen.queryByRole("alert");
    expect(notification).not.toBeInTheDocument();
  });
  it("trigger toast", async () => {
    render(<Notification />);
    const trigger = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(trigger);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});
