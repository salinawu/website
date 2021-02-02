// TODO catch errors

export async function fetchCeramics() {
    const response = await fetch('/api/ceramics');
    return await response.json();
}

export async function fetchResume() {
    const response = await fetch('/api/resume');
    return await response.text();
}
