// TODO catch errors
// TODO alter by environment
// const functionsRequest = "http://localhost:5001/personal-website-f24ac/us-central1/app";
const functionsRequest = "https://us-central1-personal-website-f24ac.cloudfunctions.net/personal-website-f24ac/us-central1/app";

export async function fetchJson(path) {
    const response = await fetch(`${functionsRequest}${path}`);
    return await response.json();
}

export async function fetchText(path) {
    console.log("fetching from path: ", path);
    const response = await fetch(`${functionsRequest}${path}`);
    return await response.text();
}
