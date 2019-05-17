import SETTINGS from './config.exchanges';
import u from 'lodash';

let settings = SETTINGS('Bitfinex');

const subscribeTickers = (w) => {
    Object.keys(settings.COINS).forEach((pair) => {
        let msg = JSON.stringify({
            event: 'subscribe',
            channel: 'ticker',
            symbol: settings.COINS[pair],
        });
        w.on('open', () => w.send(msg));
    });
};

export default { subscribeTickers };
