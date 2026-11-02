
import Track from "./Track";

function Playlist({
                      tracks,
                      playlistName,
                      onNameChange,
                      onRemove,
                      onSave
                  }) {
    return (
        <section className="Playlist">
            <h2>My Playlist</h2>

            <input
                className="Playlist-name"
                type="text"
                value={playlistName}
                onChange={(event) => onNameChange(event.target.value)}
                placeholder="Playlist name"
            />

            {tracks.length === 0 ? (
                <p className="empty-message">
                    Your playlist is empty. Add some songs!
                </p>
            ) : (
                tracks.map((track) => (
                    <Track
                        key={track.id}
                        track={track}
                        onRemove={onRemove}
                        isRemoval={true}
                    />
                ))
            )}

            <button
                className="Playlist-save"
                onClick={onSave}
                disabled={tracks.length === 0}
            >
                SAVE PLAYLIST
            </button>
        </section>
    );
}

export default Playlist;
