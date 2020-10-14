export class Stock {
    ///public notablePerson: Person[];
    constructor(
        public stockType: String,
        public name: String,
        public code: String,
        public price: number,
        public prevprice: number,
        public addFav: boolean = false,
    ) {
        //this.notablePerson = [];
    }
    showDiff(): boolean {
        return this.prevprice < this.price;
    }
}
export class Person {
    public name: String;
    public title: String;
}
