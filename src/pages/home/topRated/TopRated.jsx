import PropTypes from 'prop-types';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SelectTab from '../../../components/selectTab/SelectTab';
import Carousel from '../../../components/carousel/Carousel';
import mediaApi from '../../../api/modules/mediaApi';
import { useState, useEffect } from 'react';


function TopRated({ movie, tv, mediaCategory }) {

    const [medias, setMedias] = useState([]);
    const [mediaType, setMediaType] = useState(movie);
    const tabs = [movie, tv];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTopRated = async () => {
            const { results } = await mediaApi.getList(mediaType, mediaCategory, { page: 1 });
            if (results) {
                setMedias(results);
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
            }
        };
        getTopRated();

    }, [mediaType]);

    const handleTab = (tab) => {
        setMediaType(tab === movie ? movie : tv);
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
                title={mediaCategory.replace('_', ' ')}
                medias={medias}
                loading={loading} />
        </section>
    )
}

TopRated.propTypes = {
    movie: PropTypes.string,
    tv: PropTypes.string,
    mediaCategory: PropTypes.string
}

export default TopRated;
