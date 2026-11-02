
const BASE_URL = "https://itunes.apple.com/search";

export async function searchTracks(searchTerm) {
    const url = new URL(BASE_URL);

    url.searchParams.set("term", searchTerm);
    url.searchParams.set("entity", "song");
    url.searchParams.set("limit", "20");

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Music search request failed.");
    }

    const data = await response.json();

    return data.results.map((track) => ({
        id: track.trackId,
        name: track.trackName,
        artist: track.artistName,
        album: track.collectionName,
        artwork: track.artworkUrl100,
        previewUrl: track.previewUrl
    }));
}
