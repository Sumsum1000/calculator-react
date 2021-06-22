import './BtnBase.css';

const BtnBase = ({val, onClickBase}) => {  // {valBase,valOp, displayVal}

    onClickBase = () =>{
        console.log('2 Im BtnBase');
    }

  
    return (
        <div className='btn-root'>
            <h3 onClick={onClickBase} >{val}</h3>
        </div>
    )
}

export default BtnBase;

//onClick={() => displayVal(valBase)}