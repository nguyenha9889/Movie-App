import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import mediaApi from '../../../api/modules/mediaApi';
import './officialVideo.scss';
import tmdbConfig from '../../../api/tmdbConfig';



function OfficialVideos({ mediaType, id }) {
    
    const [videos, setVideos] = useState();
    const [videoIndex, setVideoIndex] = useState(0);

    useEffect(() => {
        setVideoIndex(0);
        const getVideos = async () => {
            const { results } = await mediaApi.getVideos(mediaType, id);
            if (results.length > 0) {
                setVideos(results);
            }
        };
        getVideos();

    }, [id]);

    const handleVideoIndex = (index) => {
        setVideoIndex(index);
    };

    return (
        <section className='official-playlist'>
            {videos ?
                <ContentWrapper>
                    <h2 className='title'> Official Videos</h2>
                    <div className="playlist">
                        <div className="video" >
                            <iframe
                                src={tmdbConfig.youtubePath(videos[videoIndex].key)}
                                title={videos[videoIndex].name}
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen />
                            <p className='video-title'>{videos[videoIndex].name}</p>
                        </div>
                        <div className="pagination">
                            {videos.map((e, index) =>
                                <a className={index === videoIndex ? "active" : ""}
                                    key={index}
                                    onClick={() => handleVideoIndex(index)}
                                >{index + 1}</a>
                            )}
                        </div>
                    </div>
                </ContentWrapper> : <></>}
        </section>
    )
};

OfficialVideos.propTypes = {
    mediaType: PropTypes.string,
    id: PropTypes.string,
};

export default OfficialVideos;
