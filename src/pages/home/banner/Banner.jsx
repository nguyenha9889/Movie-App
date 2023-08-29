import PropTypes from 'prop-types';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { useEffect, useState } from 'react';
import mediaApi from '../../../api/modules/mediaApi';
import tmdbConfig from '../../../api/tmdbConfig';
import './banner.scss';


function Banner({ mediaType, mediaCategory }) {
    const [background, setBackground] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const getMovies = async () => {
            const time_window = "week";
            const { results } = await mediaApi.getTrending(mediaType, mediaCategory, time_window);
            if (results) {
                const randomMovie = Math.floor(Math.random() * 20);
                const endpointBackdrop = results[randomMovie].backdrop_path;
                setBackground(tmdbConfig.backdropPath(endpointBackdrop));
               setLoading(true);
            }
        };
        getMovies();
        
    }, [mediaType, mediaCategory, isLoading])

    return (
        <div className='banner'>
            <div className="back-drop-image">
                { isLoading && <Img
                    src={background}
                    alt='banner-home-page'
                />}
                
            </div>
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <h1 className='title'>Welcome to H-Movie</h1>
                <p className='sub-title'>
                    <span>Sharp picture,</span>
                    <span>vivid sound,</span>
                    <span>with thousands of</span>
                    <span>FREE & Full HD movies.</span>
                    <span>Watching now!!!</span>
                </p>
            </ContentWrapper>
        </div>
    )
}

Banner.propTypes = {
    mediaType: PropTypes.string,
    mediaCategory: PropTypes.string,
}

export default Banner;
