import u from 'lodash';
import store from '../store';

const dispatchSetChannelAction = (msg) => {
    switch (msg.event) {
        case 'subscribed': {
            return store.dispatch({ type: `BITFINEX_SET_CHANNEL_ID_${msg.pair}`, payload: msg.chanId });
        }
        default:
            return;
    }
};

const dispatchPricingAction = (msg) => {
    let inverted_channels_obj = u.invert(store.getState().bitfinex_channels);
    if (msg[1][2]) {
        let payloadObj = { bid: msg[1][0], ask: msg[1][2], mid: (msg[1][0] + msg[1][2]) / 2 };
        return store.dispatch({ type: `BITFINEX_SET_PRICING_${inverted_channels_obj[msg[0]]}`, payload: payloadObj });
    } else return;
};

const pub_web_socket_actions = (msg) => {
    let jsonMsg = JSON.parse(msg);
    if (jsonMsg.event) return dispatchSetChannelAction(jsonMsg);
    else return dispatchPricingAction(jsonMsg);

    return;
};

export default { pub_web_socket_actions };
