// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
        this.pi=Math.PI;
    }

    get diameter(){
        return 2 * this.radius
    }

    get circumference(){
        return this.pi * this.diameter
    }

    get area(){
        return this.pi * (this.radius ** 2)
    }

    set diameter(diameter){
        this.radius = diameter / 2;
    }

    set circumference(circumference){
        this.diameter = circumference / this.pi
    }

    set area(area){
        this.radius = Math.sqrt(area/pi)
    }

}