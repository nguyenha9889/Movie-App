import PropTypes from 'prop-types';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './btnGoTop.scss';

function BtnGoTop({ onClick }) {

    return (
        <button className='btn-go-top'
            onClick={onClick}
        ><AiOutlineArrowUp /></button>
    )
}

BtnGoTop.protoTypes = {
    onClick: PropTypes.func,
}

export default BtnGoTop;
