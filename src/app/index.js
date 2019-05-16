import util from 'util';
import Exchanges from './exchanges';
// import Database from '../database';
// import Pricing from '../pricing';
// import Price from '../models/price';
// import Trading from '../trading';
// import Model from '../wallet/model';
// import Indicators from '../methods/indicators/index';

var setTimeoutPromise = util.promisify(setTimeout);

const App = () => {

	const mainLoop = async () => {

		var time = 3 * 1000;
		try {
			
			// var prices = await this.Pricing.getPrices();
			// var price = await Price.create(prices);
            // console.log(price.spot);
            
            console.log('hi');
			
			//await this.Trading.init(price);

		} catch (error) {
			console.log(error);
		}
		await setTimeoutPromise(time);
		mainLoop();
	}

	const  init = () => {
		// var db = new Database();
		// await db.connect();
		// await Model.initialize();
		// var indicators = new Indicators();
		// await indicators.init();
		  mainLoop();
    }
    
    return init();
}

export default App
