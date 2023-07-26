

export const GET = async (request, { params }) => {
    console.log(params)
    try {
        const response = await fetch(`https://ergast.com/api/f1/2023/${params.round}.json`, { next: {revalidate: 60}});
        const data = await response.json();
        const race = data.MRData.RaceTable.Races[0];
        return new Response(JSON.stringify(race), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
