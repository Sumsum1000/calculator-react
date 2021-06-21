import BtnBase from '../BtnBase/BtnBase';
import './BtnEqual.css';

const BtnEqual = ({val, equal}) => {

    return (
        <BtnBase onClick={(num1, num2) => equal} valBase={val}/>
    )
}

export default BtnEqual;