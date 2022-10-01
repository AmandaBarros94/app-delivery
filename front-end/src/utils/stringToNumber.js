const stringToNumber = (price) => parseFloat(price.replace(/,/g, '.'));

export default stringToNumber;
