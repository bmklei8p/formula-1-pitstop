
export const GET = async () => {
    try {
        const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json', {next: {revalidate: 60}});
        const data = await response.json();
        const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        return new Response(JSON.stringify(standings), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response(error.message || error.toString(), {status: 500});
    }
}