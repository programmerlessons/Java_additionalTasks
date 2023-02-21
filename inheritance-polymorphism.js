// Tasks 1 & 2

class Shape{
    constructor(colour="Trasparent"){
        this.colour = colour;
        this.type = 'Shape';
    }
    describe(){
        console.log(`A ${this.colour} ${this.type}`);
    }
}
const shape = new Shape();
shape.describe()

// Tasks 3 & 4

class Square extends Shape{
    constructor(colour, sidelength){
        super(colour);
        this.sidelength = sidelength;
        this.type = 'Square';
    }
    area(){
        return this.sidelength*this.sidelength;
    }
}
const square = new Square('blue',10);
console.log(square.area())

// Tasks 5 & 6

class Rectangle extends Shape{
    constructor(colour, width, height){
        super(colour);
        this.width = width;
        this.height = height;
        this.type = 'Rectangle'
    }
    area(){
        return this.width*this.height;
    }
}
const rect = new Rectangle('purple',20,30);
console.log(rect.area())


class Utilities{
    static camelCase(str){
        var split_string=str.split(" ");
        var final_str="";
        for(var iter=0; iter<split_string.length; iter++){
            if(iter==0){
                final_str+=split_string[iter].toLowerCase();
            }
            else{
                var word = split_string[iter];
                final_str += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        }
        return final_str;
    }
}
console.log("ENCAPSULATION")
console.log(Utilities.camelCase("hello there"))
console.log(Utilities.camelCase("HELLO THERE"))
console.log(Utilities.camelCase("I love cookies"))
console.log(Utilities.camelCase("Monkey Banana"))