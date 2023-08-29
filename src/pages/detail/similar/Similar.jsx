import PropTypes from 'prop-types';
import Carousel from '../../../components/carousel/Carousel';
import { useEffect, useState } from 'react';
import mediaApi from '../../../api/modules/mediaApi';


function Similar({ mediaType, id }) {

    const [medias, setMedias] = useState([]);
    const [loading, setLoading] = useState(true);
    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    useEffect(() => {
        const getMediaSimilar = async () => {
            const { results } = await mediaApi.getSimilar(mediaType, id, { page: 1 });
            if (results) {
                const tmdbSimilar = results.slice(0, 10);
                setMedias(tmdbSimilar);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            };
        };
        getMediaSimilar();
    }, [mediaType, id])

    return (
        <>{medias.length > 0 && <section className='similar'
            style={{ position: 'relative', margin: '50px 0' }}>
            <Carousel
                mediaType={mediaType}
                title={title}
                medias={medias}
                loading={loading} />
        </section>}</>
    )
}

Similar.propTypes = {
    mediaType: PropTypes.string,
    id: PropTypes.string,
}

export default Similar;
