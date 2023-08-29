import PropTypes from 'prop-types';
import Img from '../lazyLoadImage/Img';
import CircleRating from '../circleRating/CircleRating';
import ButtonPlay from '../button/ButtonPlay';
import Genres from '../../components/genres/Genres';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import './cardItem.scss';


function CardItem({ id, mediaType, title, src, rating, date , genres }) {

    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(`/${mediaType}/${id}`)}
            className='card-item'>
            <div className="poster-card">
                <Img
                    src={src}
                />
                <CircleRating rating={Number(rating.toFixed(1))} />
                {genres && <Genres/>}
                <div className="btn-navigate">
                    <ButtonPlay />
                </div>
            </div>
            <div className="content-card">
                <h3 className='card-title'>{title}</h3>
                <p className='date'>{dayjs(date).format("MMM D, YYYY")}</p>
            </div>
        </div>
    )
}

CardItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    src: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.string,
    mediaType: PropTypes.string,
}

export default CardItem;
