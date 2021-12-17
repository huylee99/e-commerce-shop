const monthText = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const dateFormat = value => {
  const orderDate = new Date(value);

  const hour = orderDate.getHours();
  const minute = orderDate.getMinutes();
  const seconds = orderDate.getSeconds();
  const date = orderDate.getDate();
  const month = monthText[orderDate.getMonth()];
  const year = orderDate.getFullYear();

  return `${date} ${month}, ${year} - ${hour}:${
    minute < 10 ? `0${minute}` : minute
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export { dateFormat };
