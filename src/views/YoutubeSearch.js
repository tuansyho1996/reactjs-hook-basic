import './YoutubeSearch.scss'
import axios from 'axios';
import { useState } from 'react';
import moment from 'moment'

const YoutubeSearch = () => {
    const [queryKey, setQueryKey] = useState('');
    const [dataResult, setDataResult] = useState([]);
    const handleClickSearch = async () => {
        console.log('check click search');
        let res = await axios({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                q: queryKey,
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAhm2bo9yi9C94Yn7kPAfoLiXrzNXc-qzo',
                type: 'video'
            }
        })
        let dataRaw = [];
        res.data.items.map(item => {
            let convertPublicAt = moment(item.snippet.publicAt).format('MMMM Do YYYY, h:mm:ss a')
            let object = {
                id: item.id.videoId,
                title: item.snippet.title,
                publicAt: convertPublicAt,
                channelTitle: item.snippet.channelTitle,
                description: item.snippet.description
            }
            dataRaw.push(object);
            return dataRaw
        })
        console.log('check data', dataRaw)
        setDataResult(dataRaw)
    }
    return (
        <div className="youtube-search-container container">
            <div className="search-bar">
                <input type="text" value={queryKey} onChange={(e) => setQueryKey(e.target.value)} />
                <button className="btn-search ms-1 mt-3" onClick={handleClickSearch} >Search</button>
            </div>
            {
                dataResult && dataResult.length > 0 &&
                dataResult.map((item) => {
                    return (
                        <div className='youtube-search-content row mt-5'>
                            <div className='content-left col-4'>
                                <iframe
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                            </div>
                            <div className='content-right col-8'>
                                <div className='title'>{item.title}</div>
                                <div className='date-public'>{item.publicAt}</div>
                                <div className='author'>Author: {item.channelTitle}</div>
                                <div className='description'>{item.description}</div>
                            </div>
                        </div>
                    )
                })

            }

        </div>
    )
}
export default YoutubeSearch