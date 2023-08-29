import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import mediaApi from '../../../api/modules/mediaApi';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyLoadImage/Img';
import './casts.scss';
import tmdbConfig from '../../../api/tmdbConfig';


function Casts({ mediaType, id }) {
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCasts = async () => {
            const { cast } = await mediaApi.getCredits(mediaType, id);
            if (cast.length > 0) {
                const tmdbCast = cast.slice(0, 5);
                setCasts(tmdbCast);
            } else setCasts(null);
        };
        getCasts();

    }, [mediaType, id]);

    return (
        <>
            {casts && <section className='casts-container'>
                <ContentWrapper>
                    <h2>Top Cast</h2>
                    <div className="list-casts">
                        {casts.map(cast =>
                            <div className="cast-item" key={cast.id}>
                                <Img src={cast.profile_path ? tmdbConfig.posterPath(cast.profile_path) : "/images/poster-not-available.jpg"} />
                                <p className='cast-name'>{cast.name}</p>
                                <p className='character'>{cast.character}</p>
                            </div>)}
                    </div>
                </ContentWrapper>
            </section>}
        </>

    )
}

Casts.propTypes = {
    mediaType: PropTypes.string,
    id: PropTypes.string
}

export default Casts;
