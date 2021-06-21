import './BtnBase.css';

const BtnBase = ({valBase,valOp, displayVal}) => {  // {valBase,valOp, displayVal}

  
    return (
        <div className='btn-root'>
            <h3 onClick={() => displayVal(valBase)} valOp={valOp}>{valBase}</h3>
        </div>
    )
}

export default BtnBase;

//onClick={() => displayVal(valBase)}