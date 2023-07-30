import RecentResults from "../app/components/RecentResults";
import { render, screen } from "@testing-library/react";
import { server } from "@/mocks/server";
import { rest } from 'msw'

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
    render(await RecentResults({raceRound: "12", race: mockRaceInfoData}));
    expect(screen.getByText("Qualification Results")).toBeInTheDocument();
    expect(screen.getByText("Race Results")).toBeInTheDocument();
  }),
  it("should render Upcoming Race timer and qualifying results, but not race results", async () => {
    // mock data that shows there is no race results infomation yet
    const mockNoRaceResultsData = {
      "MRData": {
        "xmlns": "http:\/\/ergast.com\/mrd\/1.5",
        "series": "f1",
        "url": "http://ergast.com/api/f1/current/13/results.json",
        "limit": "30",
        "offset": "0",
        "total": "0",
        "RaceTable": {
          "season": "2023",
          "round": "13",
          "Races": []
        }
      }
    }
    server.use(rest.get('https://ergast.com/api/f1/current/:raceRound/results.json', (req, res, ctx) => {
      return res(ctx.json(mockNoRaceResultsData));
  }))
    render(await RecentResults({raceRound: "12", race: mockRaceInfoData}));
    expect(screen.queryByText("Race Results")).not.toBeInTheDocument();
    expect(screen.getByText("Qualification Results")).toBeInTheDocument();
    expect(screen.getByText("Race Countdown")).toBeInTheDocument();
  }),
  it("should render Upcoming Race timer and raceTimes, but not race or qualy results", async () => {
        // mock data that shows there is no race results infomation yet
        const mockNoRaceResultsData = {
          "MRData": {
            "xmlns": "http:\/\/ergast.com\/mrd\/1.5",
            "series": "f1",
            "url": "http://ergast.com/api/f1/current/13/results.json",
            "limit": "30",
            "offset": "0",
            "total": "0",
            "RaceTable": {
              "season": "2023",
              "round": "13",
              "Races": []
            }
          }
        }
        server.use(rest.get('https://ergast.com/api/f1/current/:raceRound/results.json', (req, res, ctx) => {
          return res(ctx.json(mockNoRaceResultsData));
      }))
    // mock data that shows there is no qualifying results infomation yet
    const mockNoQualyResultsData = {
      "MRData": {
        "xmlns": "http:\/\/ergast.com\/mrd\/1.5",
        "series": "f1",
        "url": "http://ergast.com/api/f1/current/14/qualifying.json",
        "limit": "30",
        "offset": "0",
        "total": "0",
        "RaceTable": {
          "season": "2023",
          "round": "14",
          "Races": []
        }
      }
    }
    server.use(rest.get('https://ergast.com/api/f1/current/:raceRound/qualifying.json', (req, res, ctx) => {
      return res(ctx.json(mockNoQualyResultsData));
  }))
    render(await RecentResults({raceRound: "12", race: mockRaceInfoData}));
    expect(screen.queryByText("Race Results")).not.toBeInTheDocument();
    expect(screen.queryByText("Qualification Results")).not.toBeInTheDocument();
    expect(screen.getByText("Race Countdown")).toBeInTheDocument();
    expect(screen.getByText("My Times")).toBeInTheDocument();
  })
})