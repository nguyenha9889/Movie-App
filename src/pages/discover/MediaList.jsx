import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import GlobalLoading from '../../components/globalLoading/GlobalLoading';
import CardItem from '../../components/cardItem/CardItem';
import Select from 'react-select';
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGlobalLoading } from '../../redux/features/globalLoadingSlice';
import { useParams } from 'react-router-dom';
import tmdbConfig from '../../api/tmdbConfig';
import getGenres from '../../api/modules/genresApi';
import mediaApi from '../../api/modules/mediaApi';
import BtnGoTop from '../../components/button/BtnGoTop';
import './mediaList.scss';


let genreEndpoint;

function MediaList() {
    const { globalLoading } = useSelector(state => state.globalLoading);
    const dispatch = useDispatch();
    const { mediaType } = useParams();
    const [medias, setMedias] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const [genre, setGenre] = useState();
    const [curPage, setCurPage] = useState(1);
    const [showBtn, setShowBtn] = useState(false);


    const getMediaList = useCallback(async () => {

        const { results } = await mediaApi.discover(mediaType, curPage, genreEndpoint);

        if (results.length > 0) {
            
            if (genre || curPage > 1) setMedias(prev => [...prev, ...results]);
            else {
                dispatch(setGlobalLoading(true));
                setMedias(results);
                setTimeout(() => { dispatch(setGlobalLoading(false)) }, 2000);
            };
        }
    }, [mediaType, curPage, genreEndpoint]);

    useEffect(() => {
        const getGenreList = async () => {
            const { genres } = await getGenres(mediaType);
            if (genres) setGenreList(genres);
        };
        if (curPage === 1) {
            setMedias([]);
            getGenreList();
        }
        getMediaList();

    }, [mediaType, getMediaList]);

    useEffect(() => {
        const showBtnGoTop = () => {
            if (window.scrollY > 500) setShowBtn(true);
            else setShowBtn(false);
        }
        window.addEventListener("scroll", showBtnGoTop);
    }, [showBtn]);

    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const handleChangeSelect = (optionSelected, select) => {
        setGenre(optionSelected);
        if (select.action !== 'clear') {
            const genreId = optionSelected.map(item => item.id);
            genreEndpoint = genreId.toString();
        }
        setCurPage(1);
        setMedias([]);
        getMediaList();
    };

    return (
        <main className='discover-page'>
            <ContentWrapper>
                <div className='discover-header'>
                    <h2 className='title'>Discover {mediaType === "tv" ? "TV Show" : "Movie"}</h2>
                    <div className="filters">
                        <Select
                            isMulti
                            name='genres'
                            value={genre}
                            closeMenuOnSelect={false}
                            options={genreList && genreList}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => option.name}
                            onChange={handleChangeSelect}
                            placeholder='Select genres'
                            className='filter-media-container'
                            classNamePrefix='filter-media'
                        />
                    </div>
                </div>
                <section className='discover-result'>
                    {!globalLoading && medias?.map((e, i) => {
                        const posterURL = e.poster_path ? tmdbConfig.posterPath(e.poster_path) : "/images/poster-not-available.jpg";
                        return <CardItem
                            key={i}
                            id={e.id}
                            mediaType={mediaType}
                            title={e.title || e.name}
                            src={posterURL}
                            rating={(e.vote_average)}
                            date={e.release_date || e.first_air_date}
                        />
                    })}
                </section>
                {globalLoading ? <GlobalLoading /> : <div className="load-more">
                    {medias.length > 0 && <button onClick={() => setCurPage(curPage + 1)}>Load more</button>}
                </div>}
                {showBtn && <BtnGoTop onClick={handleGoTop} />}

            </ContentWrapper>
        </main>
    )
}

export default MediaList;
