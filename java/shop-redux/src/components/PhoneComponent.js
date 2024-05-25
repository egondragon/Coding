import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import phone from '../images/phone.png'
import { buyPhone } from '../redux/phone/actionPhone'

function PhoneComponent() {

    const phones = useSelector(state => state.phones)
    const dispatch = useDispatch()

    return (
        <div className="container">
            <img src={phone} alt="phone"/>
            <p>
                Availability:
                <span id="count"> { phones } </span>
            </p>
            <button onClick={() => dispatch(buyPhone())}> Buy </button>
        </div>
    );
}

export default PhoneComponent

/*
import React from 'react';
import { connect } from 'react-redux'
import phone from '../images/phone.png'
import { buyPhone } from '../redux/phone/actionPhone'

function PhoneComponent(props) {
    console.log(props.phones)

    return (
        <div className="container">
            <img src={phone} alt="phone"/>
            <p>
                Availability
                <span id="count"> { props.phones } </span>
            </p>
            <button onClick = {() => props.buyPhone()}> Buy </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        phones: state.phones
    }
}

// store.dispatch(buyPhone()) 
const mapDispatchToProps = (dispatch) => {
    return {
        buyPhone: () => dispatch (buyPhone())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PhoneComponent);
*/
