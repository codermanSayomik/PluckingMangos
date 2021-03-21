class Catapult{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.catapult = Constraint.create(options);
        World.add(world, this.catapult);
    }

    fly(){
        this.catapult.bodyA=null;
    }

    Launch(bodyA){
        this.catapult.bodyA=bodyA;
    }

    display(){
       
    }
    
}