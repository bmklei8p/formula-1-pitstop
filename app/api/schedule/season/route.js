

export const GET = async (req, res) => {
    try {
        const data = await fetch('https://ergast.com/api/f1/2023.json', { next: {revalidate: 360000}});
        const json = await data.json();
        return new Response(JSON.stringify(json.MRData.RaceTable.Races), { status: 200 })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting schedule" }, {status: 500});
    }
}