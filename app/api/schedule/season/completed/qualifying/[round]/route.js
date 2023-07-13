export const GET = async (request, { params }) => {
    try {
        const response = await fetch(`http://ergast.com/api/f1/current/${params.round}/qualifying.json`);
        const data = await response.json();
        const results = data.MRData.RaceTable.Races[0].QualifyingResults;
        return new Response(JSON.stringify(results), {status: 200});
    } catch (err) {
        return new Response(JSON.stringify(err), {status: 500});
    }
};