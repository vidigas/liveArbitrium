import { combineReducers } from 'redux';

import bitfinexChannelsReducer from './bitfinexChannelsReducer';
import bitfinexPricingReducer from './bitfinexPricingReducer';
import poloniexPricingReducer from './poloniexPricingReducer';

export default combineReducers({
    bitfinex_channels: bitfinexChannelsReducer,
    bitfinex_pricing: bitfinexPricingReducer,
    poloniex_pricing: poloniexPricingReducer,
});
