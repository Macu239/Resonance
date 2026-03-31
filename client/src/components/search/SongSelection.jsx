import "./SongSelection.css";

export default function SongSelection({ SongData }) {
    return (
        <div className="songContainer">
            <div className="songJacket">
                <img src={SongData.albumJacket} className="jacketImage" />
            </div>

            <div className="songTitle">
                {SongData.songTitle}
            </div>

            <div className="artistAndLengthContainer">
                <div className="songArtist">
                    {SongData.songArtist}
                </div>
                <div className="songLength">
                    {SongData.songLength}
                </div>
            </div>
        </div>
    )
}