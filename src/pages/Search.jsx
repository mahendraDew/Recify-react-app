import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Error, Loader } from '../components'

import { useGetSongsBySearchQuery } from '../redux/services/shazam'
import { useGetTopChartsQuery } from '../redux/services/shazam'

import SongCard from '../components/SongCard'
import SongCardSearch from '../components/SongCardSearch'


const Search = () => {
  
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { data:topChartData } = useGetTopChartsQuery();

  const { data:searchData, isFetching, error } = useGetSongsBySearchQuery(searchTerm)

  // const songs = searchData?.result?.tracks?.hits?.map((song) => song.url);
  // console.log(songs, "Search")
  console.log(searchData, "searchData from Search.jsx")

  if (isFetching ) return <Loader tittle='Loading Songs' />
  if (error) return <Error />

  // the data we are getting from this api (useGetSongsBySearchQuery) is entirely different from the data we are getting from the songCard.jsx component
  // we need to convert the data we are getting from this api to the data we are getting from the songCard.jsx component
  // we need to convert the searchData to topChartData;
  // useEffect(() => {
  //   topChartData?.result?.tracks.slice(0, 8)?.map((topchartSong, ti) => {
  //     searchData?.result?.tracks?.hits?.slice(0, 8)?.map((searchSong, si) => {
  //       topchartSong.title = searchSong.heading.title;
  //       topchartSong.subtitle = searchSong.heading.subtitle;
  //       topchartSong.images.background = searchSong.images.default;
  //       topchartSong.images.coverart = searchSong.images.default;
  //       topchartSong.images.coverarthq = searchSong.images.default;
  //       topchartSong.images.joecolor = searchSong.images.default;
  //       topchartSong.key = searchSong.key;
  //       topchartSong.type = searchSong.type;
  //       topchartSong.url = searchSong.url;
  //     });
  //   });
      
  // }, [])
  var topChartDataOrg=topChartData?.result?.tracks.slice(0, 8);

  const [ objData, setObjData ] = useState({});

  console.log(topChartDataOrg, "topChartData from Search.jsx")
  // function convertData() {
  //   for(let i = 0; i < searchData?.result?.tracks?.hits?.length; i++) {
  //     // topChartDataOrg[i].title = searchData?.result?.tracks?.hits[i]?.heading?.title;
  //     // console.log(topChartDataOrg[i].title, "title from convertData")
  //     const updatedObj = {
  //       title: searchData?.result?.tracks?.hits[i]?.heading?.title,
  //       subtitle: searchData?.result?.tracks?.hits[i]?.heading?.subtitle,
  //       images: {
  //         background: searchData?.result?.tracks?.hits[i]?.images?.default,
  //         coverart: searchData?.result?.tracks?.hits[i]?.images?.default,
  //         coverarthq: searchData?.result?.tracks?.hits[i]?.images?.default,
  //         joecolor: searchData?.result?.tracks?.hits[i]?.images?.default,
  //       },
  //       key: searchData?.result?.tracks?.hits[i]?.key,
  //       type: searchData?.result?.tracks?.hits[i]?.type,
  //       url: searchData?.result?.tracks?.hits[i]?.url,
  //     }
  //     setObjData(updatedObj);
  //   }
    
  // }convertData();
  // useEffect(() => {
  //   const updatedObj = {
  //     title: searchData?.result?.tracks?.hits[i]?.heading?.title,
  //     subtitle: searchData?.result?.tracks?.hits[i]?.heading?.subtitle,
  //     images: {
  //       background: searchData?.result?.tracks?.hits[i]?.images?.default,
  //       coverart: searchData?.result?.tracks?.hits[i]?.images?.default,
  //       coverarthq: searchData?.result?.tracks?.hits[i]?.images?.default,
  //       joecolor: searchData?.result?.tracks?.hits[i]?.images?.default,
  //     },
  //     key: searchData?.result?.tracks?.hits[i]?.key,
  //     type: searchData?.result?.tracks?.hits[i]?.type,
  //     url: searchData?.result?.tracks?.hits[i]?.url,
  //   }
  //   setObjData(updatedObj);
  // }, [searchData])

  console.log(objData, "objData from Search.jsx")

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Showing result for <span className='font-black'>{searchTerm}</span>
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {/* {topChartDataOrg?.map((song, i) => ( */}
        {searchData?.result?.tracks?.hits?.slice(0, 10)?.map((song, i) => (
          
          <SongCardSearch
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={searchData}
            isSearched={true}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
