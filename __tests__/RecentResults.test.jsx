import RecentResults from "@/app/components/RecentResults";
import { render } from "@testing-library/react";

describe("BriefStandings Rendering", () => {
  it("should render upcoming race timer and timings", () => {
    render(<RecentResults raceRound={20} race={20} />);
  })
})