import PropTypes from 'prop-types';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SelectTab from '../../../components/selectTab/SelectTab';
import Carousel from '../../../components/carousel/Carousel';
import mediaApi from '../../../api/modules/mediaApi';
import tmdbConfig from '../../../api/tmdbConfig';
import { useState, useEffect } from 'react';



function Trending({ mediaType, mediaCategory }) {
    const { day, week } = tmdbConfig.time_window;
    const tabs = [day, week];
    const [medias, setMedias] = useState([]);
    const [timeEndpoint, setTimeEndpoint] = useState(day);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMedias = async () => {
            const { results } = await mediaApi.getTrending(mediaType, mediaCategory, timeEndpoint);
            if (results) {
                setMedias(results);
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
            }
        };
        getMedias();
    }, [timeEndpoint, loading]);

    const handleTab = (tab) => {
        setTimeEndpoint(tab === day ? day : week);
    };

    return (
        <section className='medias-container'>
            <ContentWrapper>
                <SelectTab
                    tabs={tabs}
                    onChangeTab={handleTab} />
            </ContentWrapper>
            <Carousel
                mediaType={mediaType}
                title={`${mediaType} ${mediaCategory}`}
                medias={medias}
                loading={loading} />
        </section>
    )
}

Trending.propTypes = {
    mediaType: PropTypes.string,
    mediaCategory: PropTypes.string,
}

export default Trending;
