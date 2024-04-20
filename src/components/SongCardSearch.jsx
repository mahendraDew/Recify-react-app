import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import { useEffect } from 'react'

const SongCardSearch = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch()

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i})),
    dispatch(playPause(true));
  }
  const handlePauseClick = () => {
    dispatch(playPause(false));
  }
  console.log(song, "song from SearchSongCard")
  console.log(data, "data from SearchSongCard")  // this data that we are getting is entirely diff from data in songCard.jsx component
  console.log(activeSong, "activesong from SearchSongCard")

  // useEffect(() => {
  //   song.url = 
  // }, [])

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt='song_img' src={song.images?.default} />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${song?.key}`}>{song.heading.title}</Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song.heading.subtitle}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCardSearch
