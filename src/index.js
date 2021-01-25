module.exports = function towelSort (matrix) {
    let array = matrix;
    let newArray = [];
    if (array === undefined || array.length === 0) {
        return [];
    }
    for (let i = 0; i < array.length; i++){
        if (i % 2 === 0) {
            array[i].sort((a, b) => a - b);
        } else {
            array[i].sort((a, b) => b - a);
        }
        for (let j = 0; j < array[i].length; j++){
            newArray.push(array[i][j]);
        }
    }
    return newArray;
}
