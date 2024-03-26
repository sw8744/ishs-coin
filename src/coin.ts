export default class Coin {
    private name: string;
    private defaultPrice: number;
    private currentValue: number;
    private maxDelta: number;

    constructor(name: string, defaultPrice: number, maxDelta: number) {
        this.name = name;
        this.defaultPrice = defaultPrice;
        this.maxDelta = maxDelta;
        this.currentValue = defaultPrice;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.defaultPrice;
    }

    public changePrice() {
        let delta: number = Math.floor(Math.random() * this.maxDelta - this.maxDelta / 3);
        this.currentValue += delta;
        console.log(this.currentValue);
        console.log(delta);
        console.log('')
    }
}