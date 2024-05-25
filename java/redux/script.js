// Action
const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';
const BUY_TV = 'BUY_TV';

function buyPhone() {
    return {
        type: BUY_PHONE
    }
}

function buyTablet() {
    return {
        type: BUY_TABLET
    }
}

function buyTV() {
    return {
        type: BUY_TV
    }
}

// Reducer
// (prevState, action) => newState

const initialStatePhone = {
    phones: 5,
    tablet: 10
}

const initialStateTV = {
    tvs: 15
}

const PhoneReducer = (state = initialStatePhone, action) => {
    switch (action.type) {
        case BUY_PHONE:
            let x = state.phones;

            if (x > 0) {
                x = x - 1;
            }
            return {
                ...state,
                phones: x
            }
        break;
        case BUY_TABLET:
            let y = state.tablet;

            if (y > 0) {
                y = y - 1;
            }
            return {
                ...state,
                tablet: y
            }
        break;
        default: return state
    }
}

const tvReducer = (state = initialStateTV, action) => {
    switch (action.type) {
        case BUY_TV:
            let x2 = state.tvs;

            if (x2 > 0) {
                x2 = x2 - 1;
            }
            return {
                ...state,
                tvs: x2
            }
        break;
        default: return state
    }
}

const rootReducer = Redux.combineReducers({
    phone: PhoneReducer,
    tv: tvReducer
})

const store = Redux.createStore(rootReducer);
console.log(store)

const availablePhones = document.getElementById('count');
const availableTablet = document.getElementById('count-tab');
const availableTV = document.getElementById('count-tv');

availablePhones.innerHTML = store.getState().phone.phones;
availableTablet.innerHTML = store.getState().phone.tablet;
availableTV.innerHTML = store.getState().tv.tvs;

console.log(store.getState());

document.getElementById('buy-phone').addEventListener('click', function () {
    store.dispatch(buyPhone())
});

document.getElementById('buy-tablet').addEventListener('click', function () {
    store.dispatch(buyTablet())
});

document.getElementById('buy-tv').addEventListener('click', function () {
    store.dispatch(buyTV())
});

store.subscribe(() => {
    availablePhones.innerHTML = store.getState().phone.phones;
    availableTablet.innerHTML = store.getState().phone.tablet;
    availableTV.innerHTML = store.getState().tv.tvs;
});


