import { connectToDB } from "@/utils/database"

export default GET = async (req, res) => {
    try {
        connectToDB();
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await res.json();
        console.log(json);
        return new Response(JSON.stringify(json), {status: 200});
    } catch (err) {
        console.log(err);
        return new Response(err, {status: 500});
    }
}