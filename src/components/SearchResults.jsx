
import Track from "./Track";

function SearchResults({ tracks, onAdd }) {
    return (
        <section className="SearchResults">
            <h2>Search Results</h2>

            {tracks.length === 0 ? (
                <p className="empty-message">
                    Search for your favourite songs.
                </p>
            ) : (
                tracks.map((track) => (
                    <Track
                        key={track.id}
                        track={track}
                        onAdd={onAdd}
                        isRemoval={false}
                    />
                ))
            )}
        </section>
    );
}

export default SearchResults;
