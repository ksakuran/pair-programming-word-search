const transpose = function(matrix) {
  let newArray = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }

  for (let row of matrix) {
    for (let j = 0; j < row.length; j++) {
      newArray[j].push(row[j]);
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].includes(undefined)) {
      newArray.splice(i, 1);
    }
  }
  
  return newArray;
};

module.exports = transpose;