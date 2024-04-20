import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'

import { useGetTopChartsQuery } from '../redux/services/shazam'
import { selectGenreListId } from '../redux/features/playerSlice';



const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();

    console.log(data);

    if(isFetching) return <Loader tittle="Loading songs..."/>

    if(error) return <Error />

    return (
        <div className='flex flex-col '>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-white text-left'>Discover</h2>
                
            </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {
                    data.result.tracks.slice(0, 50)?.map((song, i) => <SongCard key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data}/>)
                }

            </div>
        </div>
    );
}

export default Discover
