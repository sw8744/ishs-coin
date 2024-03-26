import Coin from './coin'

var coin: Coin = new Coin('test', 10, 10)
setInterval(async () => {
    coin.changePrice();
}, 1000);