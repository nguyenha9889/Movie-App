import React from 'react';
import PropTypes from 'prop-types';
import { MdFavorite } from 'react-icons/md';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import GlobalLoading from '../../../components/globalLoading/GlobalLoading';
import Img from '../../../components/lazyLoadImage/Img';
import Genres from '../../../components/genres/Genres';
import tmdbConfig from '../../../api/tmdbConfig';
import dayjs from 'dayjs';
import './detailHeader.scss';


function DetailHeader({ media, globalLoading }) {

    return (
        <section className='detail-page-header'>
            {globalLoading ? <GlobalLoading /> :
                <>
                    <div className="bg-detail">
                        <Img
                            src={tmdbConfig.backdropPath(media.backdrop_path)} />
                    </div>
                    <div className="header-layer">
                    </div>
                    <ContentWrapper>
                        <div className="header-content">
                            <Img
                                src={tmdbConfig.posterPath(media.poster_path)} />
                            <div className="content">
                                <h2 className='title'>{media.title || media.name}</h2>
                                <p className='sub-title'>{media.tagline}</p>
                                <Genres genres={media.genres}/>
                                <div className='favorite'>
                                    <button className='btn-add-favorite'>
                                        <MdFavorite />
                                    </button>
                                    <span>Add Favorite</span>
                                </div>

                                <div className="summary">
                                    <h3 className='heading'>Overview</h3>
                                    <p className='desciption'>{media.overview}</p>
                                </div>
                                <div className="info-row">
                                    <p className='info'>
                                        <span>Status:</span>
                                        <span>{media.status}</span>
                                    </p>
                                    <p className='info'>
                                        <span>Date:</span>
                                        <span>{dayjs(media.release_date).format("MMM D, YYYY") || dayjs(media.first_air_date).format("MMM D, YYYY")}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ContentWrapper>
                </>}
        </section>
    )
}

DetailHeader.propTypes = {
    media: PropTypes.object,
    globalLoading: PropTypes.bool,
};

export default DetailHeader;
