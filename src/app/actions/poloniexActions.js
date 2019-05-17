import store from '../store';

const pub_web_socket_actions = (msg) => {
    let jsonMsg = JSON.parse(msg);

    if (jsonMsg[2]) {
        let channel_id = jsonMsg[2][0];
        let bid = parseFloat(jsonMsg[2][2]);
        let ask = parseFloat(jsonMsg[2][3]);
        let payloadObj = { bid, ask, mid: (bid + ask) / 2 };
        var pair;
        if (channel_id === 24) {
            pair = 'DASHBTC';
        } else if (channel_id === 50) {
            pair = 'LTCBTC';
        } else if (channel_id === 114) {
            pair = 'XMRBTC';
        } else if (channel_id === 117) {
            pair = 'XRPBTC';
        } else if (channel_id === 121) {
            pair = 'BTCUSD';
        } else if (channel_id === 148) {
            pair = 'ETHBTC';
        }
        if (pair) return store.dispatch({ type: `POLONIEX_SET_PRICING_${pair}`, payload: payloadObj });
    }

    return;
};

export default { pub_web_socket_actions };
