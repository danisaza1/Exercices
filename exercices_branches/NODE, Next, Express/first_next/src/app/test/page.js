export default async function Test() {
    const res = await fetch ('http://localhost:3001/tasks?category=Hy');
    const tasks = await res.json();
    return (
        <>
        <h1>My test page</h1>
        <pre>{JSON.stringify (tasks, null,2)}</pre>
        </>
        // pre affiche la donne de manera organizada
    );
}