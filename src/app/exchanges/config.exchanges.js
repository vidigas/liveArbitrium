const Poloniex = {
    API_KEY: 'X',
    API_SECRET: 'X',
    COINS: {
        BTCUSD: 'BTC_USDT',
        LTCBTC: 'BTC_LTC',
        ETHBTC: 'BTC_ETH',
        XRPBTC: 'BTC_XRP',
        XMRBTC: 'BTC_XMR',
        DASHBTC: 'BTC_DASH',
    },
    CHANNEL_IDS: {
        BTC_USDT: 121,
        BTC_LTC: 50,
        BTC_ETH: 148,
        BTC_XRP: 117,
        BTC_XMR: 114,
        BTC_DASH: 24,
    },
};

const Bitfinex = {
    API_KEY: 'X',
    API_SECRET: 'X',
    COINS: {
        LTCBTC: 'LTCBTC',
        ETHBTC: 'ETHBTC',
        XRPBTC: 'XRPBTC',
        XMRBTC: 'XMRBTC',
        DASHBTC: 'DSHBTC',
    },
};

const SETTINGS = (exchange) => {
    switch (exchange) {
        case 'Poloniex':
            return Poloniex;
        case 'Bitfinex':
            return Bitfinex;
        default:
            break;
    }
};

export default SETTINGS;
