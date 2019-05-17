import bitfinex from './bitfinex';
import poloniex from './poloniex';
import ws from 'ws';
import bitfinexActions from '../actions/bitfinexActions';
import poloniexActions from '../actions/poloniexActions';

const exchange_public_webSockets = (exchange) => {
    switch (exchange) {
        case 'Bitfinex':
            return bitfinexConnect();
        case 'Poloniex':
            return poloniexConnect();
        default:
            break;
    }
};

const bitfinexConnect = () => {
    const w = new ws('wss://api-pub.bitfinex.com/ws/2');

    w.on('message', (msg) => bitfinexActions.pub_web_socket_actions(msg));

    return bitfinex.subscribeTickers(w);
};

const poloniexConnect = () => {
    const w = new ws('wss://api2.poloniex.com');

    w.on('message', (msg) => poloniexActions.pub_web_socket_actions(msg));

    return poloniex.subscribeTickers(w);
};

export default exchange_public_webSockets;
