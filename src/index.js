// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) {
        return result;
    }
    for (let i = 1; i <= matrix.length; i++) {
        result = (i % 2 === 0) ? result.concat(matrix[i - 1].reverse()) : result.concat(matrix[i - 1]);
    }
    return result;
}
