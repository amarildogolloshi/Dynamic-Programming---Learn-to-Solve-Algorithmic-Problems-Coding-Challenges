/*
    Say that you are a traveler on a 2D grid. You begin in the 
    top-left corner and your goal is to travel to the bottom-right 
    corner. You may only move down or right. 
    
    In how many ways can you travel to the goal on a grid with dimensions m * n? 
    
    Write a function 'gridTraveler(m, n) that calculates this.
*/

const gridTraveler = (n, m) => {

    if (n === 1 && m === 1) 
        return 1;
    if (n === 0 || m === 0) 
        return 0;

    return gridTraveler(n - 1, m) + gridTraveler(n, m - 1)
}


console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));


