const INITIAL_STATE = {
    LTCBTC: null,
    ETHBTC: null,
    XRPBTC: null,
    XMRBTC: null,
    DASHBTC: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BITFINEX_SET_CHANNEL_ID_LTCBTC':
            return { ...state, LTCBTC: action.payload };
        case 'BITFINEX_SET_CHANNEL_ID_ETHBTC':
            return { ...state, ETHBTC: action.payload };
        case 'BITFINEX_SET_CHANNEL_ID_XRPBTC':
            return { ...state, XRPBTC: action.payload };
        case 'BITFINEX_SET_CHANNEL_ID_XMRBTC':
            return { ...state, XMRBTC: action.payload };
        case 'BITFINEX_SET_CHANNEL_ID_DASHBTC':
            return { ...state, DASHBTC: action.payload };

        default:
            return state;
    }
};
