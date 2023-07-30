import RecentResults from "../app/components/RecentResults";
import { render, screen } from "@testing-library/react";

const mockRaceInfoData = {
  season: '2023',
  round: '12',
  url: 'https://en.wikipedia.org/wiki/2023_Belgian_Grand_Prix',
  raceName: 'Belgian Grand Prix',
  Circuit: {
    circuitId: 'spa',
    url: 'http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps',
    circuitName: 'Circuit de Spa-Francorchamps',
    Location: {
      lat: '50.4372',
      long: '5.97139',
      locality: 'Spa',
      country: 'Belgium'
    }
  },
  date: '2023-07-30',
  time: '13:00:00Z',
  FirstPractice: { date: '2023-07-28', time: '11:30:00Z' },
  Qualifying: { date: '2023-07-28', time: '15:00:00Z' },
  SecondPractice: { date: '2023-07-29', time: '10:30:00Z' },
  Sprint: { date: '2023-07-29', time: '14:30:00Z' }
}

describe("RecentResults Rendering", () => {
  it("should render both qualy and race results", async () => {
    render(<RecentResults raceRound={"12"} race={mockRaceInfoData} />);
    expect(screen.getByText("Qualification Results")).toBeInTheDocument();
    expect(screen.getByText("Race Results")).toBeInTheDocument();
  })
})