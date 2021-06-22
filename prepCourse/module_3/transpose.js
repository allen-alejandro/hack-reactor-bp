

// You will be given an array that contains two strings.Your job is to create a function that will take those 
// two strings and transpose them, so that the strings go from top to bottom instead of left to right.

//   e.g.transposeTwoStrings(['Hello', 'World']);

// should return:
// H W
// e o
// l r
// l l
// o d


const transposeTwoStrings = (str1, str2) => {
  let result = ''; 
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');
  let longestArray = longestArr(str1Arr, str2Arr);

  for (i = 0; i < longestArray.length; i++) {
    if (str1Arr[i] === undefined && typeof str2Arr[i] === 'string') {
      result += ` ${str2Arr[i]}\n`;
    } else if (str2Arr[i] === undefined && typeof str1Arr[i] === 'string') {
      result += `${str1Arr[i]} \n`;
    } else {
      result += `${str1Arr[i]}${str2Arr[i]}\n`;
    }
  }
  return result; 
}

// helper function 
const longestArr = (arr1, arr2) => {
  return arr1.length > arr2.length ? arr1 : arr2;
}





console.log(transposeTwoStrings('HelloAllen', 'World'));

// function ([str1, str2])

// return [0][0]\n[1][1]\n... 