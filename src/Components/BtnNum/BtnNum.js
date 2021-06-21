import BtnBase from '../BtnBase/BtnBase';
import './BtnNum.css';

const BtnNum = ({val, operate}) => {

    return (
        <BtnBase onClick={operate} valOp={val} valBase={val}/>
    )
}

export default BtnNum;