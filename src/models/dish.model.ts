export class Dish {

    constructor(
        public id:number,
        public mealId:number,
        public dishName:string,
        public carb:number,
        public prot:number,
        public fat:number,
        public kcal:number,
    ) { }
}