import PropTypes from 'prop-types';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useRef } from 'react';
import CardItem from '../cardItem/CardItem';
import tmdbConfig from '../../api/tmdbConfig';
import GlobalLoading from '../globalLoading/GlobalLoading';
import './carousel.scss';


function Carousel({ medias , mediaType , loading, title }) {
    const carouselItems = useRef();

    const scroll = (dir) => {
        const carouselContainer = carouselItems.current;
        const moveLength =
            dir === "left"
                ? carouselContainer.scrollLeft - (carouselContainer.offsetWidth + 20)
                : carouselContainer.scrollLeft + (carouselContainer.offsetWidth + 20);

        carouselContainer.scrollTo({
            left: moveLength,
            behavior: "smooth",
        })
    }

    return (
        <>
            {medias ?
                <ContentWrapper>
                    {loading ? <GlobalLoading />
                        : <>
                            <h2 className='carousel-title'>{title}</h2>
                            <MdOutlineArrowBackIosNew
                                className='carousel-arrow left'
                                onClick={() => scroll("left")}
                            />
                            <MdOutlineArrowForwardIos
                                className='carousel-arrow right'
                                onClick={() => scroll("right")}
                            />
                            <div className="carousel-items" ref={carouselItems}>
                                {medias.map((e) => {
                                    const posterURL = e.poster_path ? tmdbConfig.posterPath(e.poster_path) : "/images/poster-not-available.jpg";
                                    return <CardItem key={e.id}
                                        id={e.id}
                                        title={e.title || e.name}
                                        src={posterURL}
                                        rating={(e.vote_average)}
                                        date={e.release_date || e.first_air_date}
                                        mediaType={mediaType}
                                    />
                                })}
                            </div>
                        </>}
                </ContentWrapper>
                : <></>}
        </>
    )
}

Carousel.propTypes = {
    medias: PropTypes.array,
    loading: PropTypes.bool,
    mediaType: PropTypes.string,
    title: PropTypes.string,
}

export default Carousel;
