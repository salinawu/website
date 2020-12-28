export async function testGet() {
    const response = await fetch('/test/get');
    return await response.json();
}

export async function fetchCeramics() {
    const response = await fetch('/ceramics');
    return await response.json();
}