import { rest } from 'msw'

// mock data for testing
const mockTimeZoneData = {
  dstOffset: 3600,
  rawOffset: -18000,
  status: 'OK',
  timeZoneId: 'America/New_York',
  timeZoneName: 'Eastern Daylight Time',
}

const mockQualifyingResultsData = {
  "MRData": {
    "xmlns": "http:\/\/ergast.com\/mrd\/1.5",
    "series": "f1",
    "url": "http://ergast.com/api/f1/current/12/qualifying.json",
    "limit": "30",
    "offset": "0",
    "total": "20",
    "RaceTable": {
      "season": "2023",
      "round": "12",
      "Races": [
        {
          "season": "2023",
          "round": "12",
          "url": "https://en.wikipedia.org/wiki/2023_Belgian_Grand_Prix",
          "raceName": "Belgian Grand Prix",
          "Circuit": {
            "circuitId": "spa",
            "url": "http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
            "circuitName": "Circuit de Spa-Francorchamps",
            "Location": {
              "lat": "50.4372",
              "long": "5.97139",
              "locality": "Spa",
              "country": "Belgium"
            }
          },
          "date": "2023-07-30",
          "time": "13:00:00Z",
          "QualifyingResults": [
            {
              "number": "1",
              "position": "1",
              "Driver": {
                "driverId": "max_verstappen",
                "permanentNumber": "33",
                "code": "VER",
                "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                "givenName": "Max",
                "familyName": "Verstappen",
                "dateOfBirth": "1997-09-30",
                "nationality": "Dutch"
              },
              "Constructor": {
                "constructorId": "red_bull",
                "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                "name": "Red Bull",
                "nationality": "Austrian"
              },
              "Q1": "1:58.515",
              "Q2": "1:52.784",
              "Q3": "1:46.168"
            },
            {
              "number": "16",
              "position": "2",
              "Driver": {
                "driverId": "leclerc",
                "permanentNumber": "16",
                "code": "LEC",
                "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                "givenName": "Charles",
                "familyName": "Leclerc",
                "dateOfBirth": "1997-10-16",
                "nationality": "Monegasque"
              },
              "Constructor": {
                "constructorId": "ferrari",
                "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                "name": "Ferrari",
                "nationality": "Italian"
              },
              "Q1": "1:58.300",
              "Q2": "1:52.017",
              "Q3": "1:46.988"
            },
            {
              "number": "11",
              "position": "3",
              "Driver": {
                "driverId": "perez",
                "permanentNumber": "11",
                "code": "PER",
                "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                "givenName": "Sergio",
                "familyName": "Pérez",
                "dateOfBirth": "1990-01-26",
                "nationality": "Mexican"
              },
              "Constructor": {
                "constructorId": "red_bull",
                "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                "name": "Red Bull",
                "nationality": "Austrian"
              },
              "Q1": "1:58.899",
              "Q2": "1:52.353",
              "Q3": "1:47.045"
            },
          ]}]}}}

const mockRaceResultsData = {
  "MRData": {
    "xmlns": "http:\/\/ergast.com\/mrd\/1.5",
    "series": "f1",
    "url": "http://ergast.com/api/f1/current/11/results.json",
    "limit": "30",
    "offset": "0",
    "total": "20",
    "RaceTable": {
      "season": "2023",
      "round": "11",
      "Races": [
        {
          "season": "2023",
          "round": "11",
          "url": "https:\/\/en.wikipedia.org\/wiki\/2023_Hungarian_Grand_Prix",
          "raceName": "Hungarian Grand Prix",
          "Circuit": {
            "circuitId": "hungaroring",
            "url": "http://en.wikipedia.org/wiki/Hungaroring",
            "circuitName": "Hungaroring",
            "Location": {
              "lat": "47.5789",
              "long": "19.2486",
              "locality": "Budapest",
              "country": "Hungary"
            }
          },
          "date": "2023-07-23",
          "time": "13:00:00Z",
          "Results": [
            {
              "number": "1",
              "position": "1",
              "positionText": "1",
              "points": "26",
              "Driver": {
                "driverId": "max_verstappen",
                "permanentNumber": "33",
                "code": "VER",
                "url": "http:\/\/en.wikipedia.org\/wiki\/Max_Verstappen",
                "givenName": "Max",
                "familyName": "Verstappen",
                "dateOfBirth": "1997-09-30",
                "nationality": "Dutch"
              },
              "Constructor": {
                "constructorId": "red_bull",
                "url": "http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing",
                "name": "Red Bull",
                "nationality": "Austrian"
              },
              "grid": "2",
              "laps": "70",
              "status": "Finished",
              "Time": {
                "millis": "5888634",
                "time": "1:38:08.634"
              },
              "FastestLap": {
                "rank": "1",
                "lap": "53",
                "Time": {
                  "time": "1:20.504"
                },
                "AverageSpeed": {
                  "units": "kph",
                  "speed": "195.910"
                }
              }
            },
            {
              "number": "4",
              "position": "2",
              "positionText": "2",
              "points": "18",
              "Driver": {
                "driverId": "norris",
                "permanentNumber": "4",
                "code": "NOR",
                "url": "http:\/\/en.wikipedia.org\/wiki\/Lando_Norris",
                "givenName": "Lando",
                "familyName": "Norris",
                "dateOfBirth": "1999-11-13",
                "nationality": "British"
              },
              "Constructor": {
                "constructorId": "mclaren",
                "url": "http:\/\/en.wikipedia.org\/wiki\/McLaren",
                "name": "McLaren",
                "nationality": "British"
              },
              "grid": "3",
              "laps": "70",
              "status": "Finished",
              "Time": {
                "millis": "5922365",
                "time": "+33.731"
              },
              "FastestLap": {
                "rank": "4",
                "lap": "50",
                "Time": {
                  "time": "1:22.178"
                },
                "AverageSpeed": {
                  "units": "kph",
                  "speed": "191.919"
                }
              }
            },
            {
              "number": "11",
              "position": "3",
              "positionText": "3",
              "points": "15",
              "Driver": {
                "driverId": "perez",
                "permanentNumber": "11",
                "code": "PER",
                "url": "http:\/\/en.wikipedia.org\/wiki\/Sergio_P%C3%A9rez",
                "givenName": "Sergio",
                "familyName": "Pérez",
                "dateOfBirth": "1990-01-26",
                "nationality": "Mexican"
              },
              "Constructor": {
                "constructorId": "red_bull",
                "url": "http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing",
                "name": "Red Bull",
                "nationality": "Austrian"
              },
              "grid": "9",
              "laps": "70",
              "status": "Finished",
              "Time": {
                "millis": "5926237",
                "time": "+37.603"
              },
              "FastestLap": {
                "rank": "5",
                "lap": "53",
                "Time": {
                  "time": "1:22.295"
                },
                "AverageSpeed": {
                  "units": "kph",
                  "speed": "191.647"
                }
              }
            },]}]}}
}

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

export const handlers = [
  rest.get('https://ergast.com/api/f1/current/:raceRound/qualifying.json', (req, res, ctx) => {
    return res(ctx.json(mockQualifyingResultsData));
  }),
  rest.get('https://ergast.com/api/f1/current/:raceRound/results.json', (req, res, ctx) => {
    return res(ctx.json(mockRaceResultsData));
  }),
  rest.get('https://maps.googleapis.com/maps/api/timezone/json', (req, res, ctx) => {
    return res(ctx.json(mockTimeZoneData));
  }),
];