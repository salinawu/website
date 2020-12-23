export async function testGet() {
    const response = await fetch('/test/get');
    return await response.json();
}