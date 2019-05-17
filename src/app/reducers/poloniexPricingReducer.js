const INITIAL_STATE = {
    LTCBTC: {},
    ETHBTC: {},
    XRPBTC: {},
    XMRBTC: {},
    DASHBTC: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'POLONIEX_SET_PRICING_LTCBTC':
            return { ...state, LTCBTC: action.payload };
        case 'POLONIEX_SET_PRICING_ETHBTC': {
            return { ...state, ETHBTC: action.payload };
        }

        case 'POLONIEX_SET_PRICING_XRPBTC':
            return { ...state, XRPBTC: action.payload };
        case 'POLONIEX_SET_PRICING_XMRBTC':
            return { ...state, XMRBTC: action.payload };
        case 'POLONIEX_SET_PRICING_DASHBTC':
            return { ...state, DASHBTC: action.payload };

        default:
            return state;
    }
};
