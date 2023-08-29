import React, { useState, useEffect } from 'react';
import DetailHeader from './detailHeader/DetailHeader';
import Casts from './casts/Casts';
import { useParams } from 'react-router-dom';
import mediaApi from '../../api/modules/mediaApi';
import { useSelector, useDispatch } from 'react-redux';
import { setGlobalLoading } from '../../redux/features/globalLoadingSlice';
import OfficialVideos from './officialVideos/OfficialVideos';
import Similar from './similar/Similar';


function Details() {

    const { mediaType, id } = useParams();
    const [media, setMedia] = useState();

    const { globalLoading } = useSelector(state => state.globalLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        const getMediaDetail = async () => {
            dispatch(setGlobalLoading(true));
            const response = await mediaApi.getDetail(mediaType, id);
            if (response) {
                setMedia(response);
                setTimeout(() => {
                    dispatch(setGlobalLoading(false));
                }, 2000);
            };
        };
        getMediaDetail();
    }, [mediaType, id, dispatch]);

    return (
        <main className='detail-page-container' style={{minHeight: '100vh'}}>
            {media &&
                <>
                    <DetailHeader
                        media={media}
                        globalLoading={globalLoading} />
                    <Casts
                        mediaType={mediaType}
                        id={id} />
                    <OfficialVideos
                        mediaType={mediaType}
                        id={id} />
                    <Similar
                        mediaType={mediaType}
                        id={id} />
                </>}
        </main>
    )
};

export default Details;
