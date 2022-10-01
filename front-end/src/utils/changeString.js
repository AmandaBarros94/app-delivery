const changeString = (index, replacement) => (
  this.substring(0, index) + replacement + this.substring(index + replacement.length)
);

export default changeString;
