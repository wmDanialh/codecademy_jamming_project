
function Track({ track, onAdd, onRemove, isRemoval }) {
    const handleAction = () => {
        if (isRemoval) {
            onRemove(track);
        } else {
            onAdd(track);
        }
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>

                <p>{track.artist}</p>

                <small>{track.album}</small>
            </div>

            {track.artwork && (
                <img
                    className="Track-artwork"
                    src={track.artwork}
                    alt={`${track.album} cover`}
                />
            )}

            <button
                className="Track-action"
                onClick={handleAction}
                aria-label={isRemoval ? "Remove song" : "Add song"}
            >
                {isRemoval ? "−" : "+"}
            </button>
        </div>
    );
}

export default Track;
