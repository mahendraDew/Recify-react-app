import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";

import { useGetSongDetailsQuery } from "../redux/services/spotify";

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const songName = 'greedy';

    const { songDetailsData } = useGetSongDetailsQuery(songName);

    console.log(songDetailsData , 'songDetailsData');

    console.log(songid);
    
    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} songData={songData}/> */}
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics</h2>
                <div className="mt-5 ">
                    {/* 1:47:01 - we need to loop through song data */}

                </div>
            </div>

            <RelatedSongs />
        </div>
    )
}

export default SongDetails;
