
import { useState } from "react";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

import { searchTracks } from "./util/iTunes";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Search for songs using iTunes API
  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setError("Please enter a song or artist name.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const results = await searchTracks(searchTerm);

      setSearchResults(results);

      if (results.length === 0) {
        setError("No songs found. Try another search.");
      }
    } catch (err) {
      setError("Unable to retrieve songs. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Add song to playlist
  const addTrack = (track) => {
    const exists = playlistTracks.some(
        (savedTrack) => savedTrack.id === track.id
    );

    if (!exists) {
      setPlaylistTracks((prevTracks) => [
        ...prevTracks,
        track
      ]);
    }
  };

  // Remove song from playlist
  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
        prevTracks.filter(
            (savedTrack) => savedTrack.id !== track.id
        )
    );
  };

  // Update playlist name
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  // Save playlist locally for now
  const savePlaylist = () => {
    const playlist = {
      name: playlistName,
      tracks: playlistTracks
    };

    console.log("Playlist saved:", playlist);

    alert("Your playlist has been prepared!");
  };

  return (
      <div className="App">
        <header>
          <h1>
            Ja<span className="highlight">mmm</span>ing
          </h1>

          <p>Create your own music playlist.</p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {isLoading && <p className="status">Searching...</p>}

        {error && <p className="error">{error}</p>}

        <div className="App-playlist">
          <SearchResults
              tracks={searchResults}
              onAdd={addTrack}
          />

          <Playlist
              tracks={playlistTracks}
              playlistName={playlistName}
              onNameChange={updatePlaylistName}
              onRemove={removeTrack}
              onSave={savePlaylist}
          />
        </div>
      </div>
  );
}

export default App;
