// TODO catch errors

export async function fetchJson(path) {
    const response = await fetch(path);
    return await response.json();
}

export async function fetchText(path) {
    const response = await fetch(path);
    return await response.text();
}
