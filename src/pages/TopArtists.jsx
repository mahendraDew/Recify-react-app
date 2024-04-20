import { Error, Loader, ArtistCard } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazam'

const TopArtists = () => {
  
  const { data, isFetching, error } = useGetTopChartsQuery()

console.log(data);

  if (isFetching ) return <Loader tittle='Loading Songs around you' />

  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Top Artists
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.result.tracks.slice(0, 50)?.map((track, i) => (
          <ArtistCard key={track.key} track={track}/>
        ))}
      </div>
    </div>
  )
}

export default TopArtists
