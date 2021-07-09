const removeStringValuesLongerThan = (num, obj) => {
  for (key in obj) {
    if ((typeof obj[key] === 'string') && (obj[key].length > num)) {
      delete obj[key];
    }
  }
  return obj;
}


