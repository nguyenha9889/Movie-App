import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './circleRating.scss';


function CircleRating({ rating }) {
    return (
        <div className='circle-rating'>
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={`${rating}`}
                styles={buildStyles({
                    pathColor: rating < 5 ? "darkorange" : rating < 7 ? "steelblue" : "green",
                })}
            />
        </div>
    )
}

CircleRating.propTypes = {
    rating: PropTypes.number,
}

export default CircleRating;
