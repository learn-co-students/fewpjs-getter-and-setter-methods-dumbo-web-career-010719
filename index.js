// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }

    set diameter(number){
        this.radius = number/2;
    }

    set circumference(number){
        this.radius = (number/Math.PI)/2;
    }

    set area(number){
        this.radius = Math.PI/number;
    }

    get diameter(){
        return this.radius * 2;
    }

    get circumference(){
        return Math.PI * this.diameter;
    }

    get area(){
        return Math.PI * (this.radius*this.radius)
    }
}