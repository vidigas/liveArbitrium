import util from 'util';
import public_webSockets from './exchanges/public_websockets';
import store from './store';

var setTimeoutPromise = util.promisify(setTimeout);

const App = () => {
    const mainLoop = async () => {
        var time = 3 * 1000;

        //log prices on redux
        console.log('pricing Poloniex', store.getState().poloniex_pricing);

        console.log('pricing Bitfinex', store.getState().bitfinex_pricing);

        //TODO inside loop:

        //    check for oper Orders -> close or not?

        //    compare PRICES
        //    search for ARBITRAGE OPORTUNITies
        //    set ORDER

        await setTimeoutPromise(time);
        mainLoop();
    };

    const init = () => {
        //connect to public websockets and save last prices on redux state

        let exchanges = ['Bitfinex', 'Poloniex'];
        exchanges.forEach((exchange) => public_webSockets(exchange));

        mainLoop();
    };

    return init();
};

export default App;
