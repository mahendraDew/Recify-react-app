import { useSelector } from 'react-redux'

import { Error, Loader, SongCard } from '../components'

import { useGetTopChartsQuery } from '../redux/services/shazam'

const TopCharts = () => {
  
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { data, isFetching, error } = useGetTopChartsQuery()



  if (isFetching ) return <Loader tittle='Loading Songs around you' />

  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Discover Top Charts
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.result.tracks.slice(0, 50)?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  )
}

export default TopCharts
