const convertDateToNumber = (string) => {
  return Number(string.split('-').join(''));
};

const calculateEventWidth = (obj) => {
  let start = convertDateToNumber(obj.start);
  let end = convertDateToNumber(obj.end);
  let width = end - start;
  if (width > 100) {
    return width - 100 + 31 + 1 //because 31 days in January and plus 1 to account for first day
  }
  return width + 1;
};

const calculateTopPosition = (obj) => {
  let eventHeight = 20;
  return (0 + (obj.id * eventHeight));
};

const calculateLeftPosition = (obj) => {
  let left = 20180101 // meaning start date of timeline is January 1st;
  let start = convertDateToNumber(obj.start);
  let distance = start - left;
  if (distance >= 100) {
    return distance - 100 + 31;
  }
  return distance;
};

const giveEventColor = (id) => {
  let colorArr = ['#4286f4', '#ff6e00', '#f7ce18', '#ff2b2b', '#4286f4', '#6f0fc4', '#ff6e00', '#0fc43c', '#ff2b2b', '#4286f4', '#0fc43c', '#ff6e00', '#f7ce18', '#ff2b2b']
  return colorArr[id - 1];
};

const distanceWidth = 25; //px width per event day

module.exports = {
  calculateEventWidth,
  calculateTopPosition,
  calculateLeftPosition,
  giveEventColor,
  distanceWidth,
};
