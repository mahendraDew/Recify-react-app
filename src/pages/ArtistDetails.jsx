import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

// import { useGetArtistsDetailsQuery } from "../redux/services/shazam";

const ArtistDetails = () => {
    const { id:artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const songName = 'greedy';

    // const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistsDetailsQuery(artistId);

    // if(isFetchingArtistDetails) return <Loader tittle="Loading artist details"/>
    // if(error) return <Error tittle="Something went wrong"/>

    console.log(songDetailsData , 'songDetailsData');

    console.log(songid);
    
    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData}/>
            


            <RelatedSongs data={Object.values(artistData?.song)} arttistId={artistId} activeSong={activeSong}/>
        </div>
    )
}

export default ArtistDetails;
