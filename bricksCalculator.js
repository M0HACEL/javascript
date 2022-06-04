let firstTotenFloor = 15;// first 10(1-10) floor's height  = 15 feet.
let eleveenToTweenty = 12;// second 10(11-20) floor's height  = 12 feet.
let moreThanTweenty = 10;// rest floor's height  = 10 feet.
const perFeet = 1000; // per feet required 1000 bricks.

// first 10 floor =(floor number(10) * per feet bricks(1000)* height of per floor(15))
// second 10 floor =(floor number(floor-10) * per feet bricks(1000)* height of per floor(12))
// 20+ floor =(floor number(floor-20) * per feet bricks(1000)* height of per floor(10))

function brickCalculator(floor){
    let floorCount = 0;
    let totalBricks = 0;
    if(floor <= 10){
        totalBricks = floor*perFeet*firstTotenFloor;
        return totalBricks;
    }else if ( floor> 10 && floor <=20){
        floorCount = floor - 10;// suppose floor is 15 =(15-10)= 5 which is floorCount
        totalBricks = (floorCount*perFeet*eleveenToTweenty)+(10*perFeet*firstTotenFloor);
        return totalBricks;
    }else{
        floorCount = floor - 20; // suppose floor is 23 =(23-20)= 3, which is floorCount
        totalBricks = (floorCount * perFeet * moreThanTweenty)+(10*perFeet*eleveenToTweenty)+(10*perFeet*firstTotenFloor);
        return totalBricks;
    }
}

console.log(brickCalculator(15));