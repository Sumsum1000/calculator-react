import './BtnOperator.css';

const BtnOperator = ({val, onClick}) => {

    // onClick = () =>{
    //     console.log('BtnOperator');
    // }


    return (
        <div className='btn-root'>
            <h3 onClick={() => onClick(val)}> {val}</h3>
        </div>
    )
}

export default BtnOperator;