const chunk = function(array, size) {
  const length = array.length;
  if(size >= length) {
    return  [array];
  }
  const parts = parseInt(length / size);
  var start = 0;
  var end = parts;
  const response = array.reduce((acc, value, index) => {
    if( index === start ) {
      acc.push(array.slice(start,end));
      start = end;
      end = end + parts;
    }
    return acc;
  }, []);
  return response;
}

module.exports = chunk;
