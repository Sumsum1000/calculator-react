//import BtnBase from '../BtnBase/BtnBase';
import './BtnDigit.css';

const BtnDigit = ({val, onClick}) => {

    // onClick = () =>{
    //     console.log('BtnDigit');
    // }

    return (
        <div className='btn-root'>
            <h3 onClick={() => onClick(val)}> {val}</h3>
        </div>
    )
}

export default BtnDigit;