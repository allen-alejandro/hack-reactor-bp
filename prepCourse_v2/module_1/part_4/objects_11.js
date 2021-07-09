


// const getSmallestElementAtProperty = (obj, key) => {
//   if (obj[key] === undefined) return undefined;
//   if (!Array.isArray(obj[key])) return undefined;
//   if (obj[key].length === 0) return undefined;

//   let smallestEl = obj[key][0];

//   for (let i = 1; i < obj[key].length; i++) {
//     if (smallestEl > obj[key][i]) smallestEl = obj[key][i];
//   }
//   return smallestEl;
// }



const getSmallestElementAtProperty = (obj, key) => {
  if ((obj[key] === undefined) || (!Array.isArray(obj[key])) || (obj[key].length === 0)) return undefined;
  let smallestEl = obj[key][0];
  for (let i = 1; i < obj[key].length; i++) {
    if (smallestEl > obj[key][i]) smallestEl = obj[key][i];
  }
  return smallestEl;
}





const getAllButLastElementOfProperty = (obj, key) => {
  if ((obj[key] === undefined) || (!Array.isArray(obj[key])) || (obj[key].length === 0)) return [];
  obj[key].pop();
  return obj[key];
}


const getElementOfArrayProperty = (obj, key, index) => {
  if (!Array.isArray(obj[key])) return undefined;
  return obj[key][index];
}