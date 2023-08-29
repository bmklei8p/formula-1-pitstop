

export const GET = async (request, { params }) => {
    try {
        const response = await fetch(`http://ergast.com/api/f1/2023/${params.round}.json`, { next: {revalidate: 360000}});
        const data = await response.json();
        const race = data.MRData.RaceTable.Races[0];
        return new Response(JSON.stringify(race), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
