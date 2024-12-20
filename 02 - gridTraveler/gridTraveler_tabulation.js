/*
    Say that you are a traveler on a 2D grid. You begin in the 
    top-left corner and your goal is to travel to the bottom-right 
    corner. You may only move down or right. 
    
    In how many ways can you travel to the goal on a grid with dimensions m * n? 
    
    Write a function 'gridTraveler(m, n) that calculates this.
*/
const gridTraveler = (n, m) => {
    const table = Array(n + 1)
        .fill()
        .map( () => Array( m + 1).fill(0) );

    table[1][1] = 1;
    for( let i=0; i<=n; i++)
    {
        for(let j=0; j <= m; j++)    
        {
            const current = table[i][j];
            if(j+1 <= m) table[i][j+1] += current;
            if(i+1 <= n) table[i+1][j] += current;

        }
    }
    return table[n][m];
}


console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));


