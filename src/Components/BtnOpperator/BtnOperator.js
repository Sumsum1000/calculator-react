import './BtnOperator.css';

const BtnOperator = ({val, operateNum}) => {

  
    return (
        <div className='btn-operator'>
            <h3 onClick={operateNum}> {val}</h3>
        </div>
    )
}

export default BtnOperator;