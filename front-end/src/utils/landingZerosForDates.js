const landingZerosForDates = (date) => {
  const [day, month, year] = date.split('/');

  if (month.length === 1) {
    const formattedMonth = `0${month}`;
    return `${day}/${formattedMonth}/${year}`;
  }

  return date;
};

// const landingZerosForDates = (date) => console.log(typeof date);

export default landingZerosForDates;
