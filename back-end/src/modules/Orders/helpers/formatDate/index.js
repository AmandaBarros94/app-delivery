const formatDate = (rawDate) => {
  const newDay = rawDate.getDate();
  const newMonth = rawDate.getMonth() + 1;
  const newYear = rawDate.getFullYear();

  const newDate = `${newDay}/${newMonth}/${newYear}`;

  return newDate;
};

module.exports = {
  formatDate,
};