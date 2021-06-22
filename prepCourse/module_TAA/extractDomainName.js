

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.For example:

// Input1: "http://github.com/carbonfive/raygun  " Output1: "github"

// Input2: "http://www.zombie-bites.com  " Output2: "zombie-bites"

// Input3: "https://www.cnet.com  " Output3: "cnet"






const getDomain = url => {
  let domain = url;
  let http1 = url.search('http://www.') + 11;
  let http2 = url.search('http://') + 7;
  let https1 = url.search('https://www.') + 12;
  let https2 = url.search('https://') + 8;
  let www = url.search('www.') + 4;

  if (http1 !== 10) {
    domain = url.slice(http1);
  } else if (http2 !== 6) {
    domain = url.slice(http2);
  } else if (https1 !== 11) {
    domain = url.slice(https1);
  } else if (https2 !== 7) {
    domain = url.slice(https2);
  } else {
    domain = url.slice(www);
  }
  return chopTLD(domain); 
}

// helper function
const chopTLD = url => {
  let result = ''
  let char = url.split('');

  for (let i = 0; i < url.length; i++) {
    if (char[i] !== '.') {
      result += char[i];
    } else if (char[i] === '.') {
      return result;
    }
  }
}


getDomain('www.ep.r')
getDomain('http://github.com/carbonfive/raygun')
getDomain('https://www.cnet.com')
getDomain('https://htxbooth.com')


