import { useState, useCallback, useEffect } from 'react';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { setGlobalLoading } from '../../redux/features/globalLoadingSlice';
import mediaApi from '../../api/modules/mediaApi';
import tmdbConfig from '../../api/tmdbConfig';
import GlobalLoading from '../../components/globalLoading/GlobalLoading';
import CardItem from '../../components/cardItem/CardItem';
import { ToastContainer, toast } from 'react-toastify';
import BtnGoTop from '../../components/button/BtnGoTop';
import 'react-toastify/dist/ReactToastify.css';
import './search.scss';


const mediaTypes = ["movie", "tv"];

function MediaSearch() {
    const { globalLoading } = useSelector(state => state.globalLoading);
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [curPage, setCurPage] = useState(1);
    const [curTab, setCurTab] = useState(mediaTypes[0]);
    const [medias, setMedias] = useState([]);
    const [showBtn, setShowBtn] = useState(false);

    const getMediaSearch = useCallback(
        async () => {
            const { results } = await mediaApi.search(curTab, curPage, query);
            if (results.length > 0) {
                if (curPage > 1) {
                    setMedias(prev => [...prev, ...results]);
                } else {
                    dispatch(setGlobalLoading(true));
                    setMedias(results);
                    setTimeout(() => { dispatch(setGlobalLoading(false)) }, 2000);
                };
            } else toast.info("Sorry, result not found", { position: toast.POSITION.TOP_CENTER });
        }, [curTab, curPage, query]
    );

    const handleQuery = (e) => {
        if (e.key === 'Enter') {
            if (query.trim().length > 0) {
                getMediaSearch();
            } else toast.warning("Your search is not Empty.", { position: toast.POSITION.TOP_RIGHT });
        }
    };

    const handleChangeTab = (item) => {
        setQuery("");
        setCurPage(1);
        setMedias([]);
        setCurTab(item);
    };

    useEffect(() => {
        if (curPage === 1) {
            setMedias([]);
            setCurTab(mediaTypes[0]);
        }
        else getMediaSearch();
    }, [curTab, getMediaSearch]);

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

    return (
        <main className='search-container'>
            <ContentWrapper>
                <ToastContainer />
                <div className="tab-search">
                    {mediaTypes.map((item, i) => <button key={i}
                        className={`${curTab === item ? "active" : ""}`}
                        onClick={() => handleChangeTab(item)}
                    >{item}</button>)}
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={handleQuery}
                    placeholder='enter your search then press Enter'
                />
                <section className="medias-result">
                    {!globalLoading && medias?.map((e, i) => {
                        const posterURL = e.poster_path ? tmdbConfig.posterPath(e.poster_path) : "/images/poster-not-available.jpg";
                        return <CardItem
                            key={i}
                            id={e.id}
                            mediaType={curTab}
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
};

export default MediaSearch;
