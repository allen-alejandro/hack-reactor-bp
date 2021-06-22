

// Is one string a rotated version of another ?

//   For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

// Extra hint: (click the drop down to ROT7 to see hint)
// Ol eua juahrk znk yzxotm, eua'rr hk ghrk zu lotj gtuznkx yzxotm otyojk znk juahrkj yzxotm ayotm lgsorogx Yzxotm skznujy.

// Juahrkj yzxotm: 'nkrru cuxrjnkrru cuxrj'
// Ykgxin c / ot oz: '       uxrjnkrru c    '


// iterate for the matching letters 


const isStringRotated = (string1, string2) => {
  let doubleString = string1 + string1;
  return doubleString.includes(string2);
}




console.log(isStringRotated('hello world', 'orldhello w'));