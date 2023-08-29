
export const GET = async (req) => {
    try {
        const response = await fetch('http://ergast.com/api/f1/current/constructorStandings.json', { next: {revalidate: 360000}});
        const data = await response.json();
        const standings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        return new Response(JSON.stringify(standings), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response(error.message || error.toString(), {status: 500});
    }
}