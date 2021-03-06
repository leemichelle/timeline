/******************************************************************** 
 * Variables for width of Events, Header, and Timeline                                *
*********************************************************************/
const eventHeight = 20;
const distanceWidth = 25; //px width per event day

/******************************************************************** 
 * Functions for Events Component                                   *
*********************************************************************/
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

const filterNames = (array) => {
  let names = [];
  array.filter(event => {
    return names.push(event.name);
  });
  return names;
}

/******************************************************************** 
 * Functions for Header Component                                   *
*********************************************************************/
const calculateHeaderPosition = (week) => {
  let start = distanceWidth * 7;
  return week * start;
};

const weeks = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const calculateDate = (weeks) => {
  let months = {
    1: 'January',
    2: 'February',
  }
  let date = 1;
  let i = 0;
  let month = 1;
  let result = [];
  while (i < weeks.length) {
    result.push(`${months[month]} ${date}`)
    date += 7;
    if (months[month] === 'January' && date >= 31) {
      let remainder = Math.abs(date - 31);
      date = remainder;
      month++;
    }
    i++;
  }
  return result;
};

const headerDates = calculateDate(weeks);

/******************************************************************** 
 * Functions for Timeline Component                                   *
*********************************************************************/
const stringToNum = (string) => {
  let numString = '';
  for (let i = 0; i < string.length; i++) {
    let number = Number(string[i]);
    let regex = /^[0-9]+$/;
    if (regex.test(number) || string[i] === '.') {
      numString+=string[i];
    }
  }
  return Number(numString);
}

const scaleIn = (string) => {
  let num = stringToNum(string);
  let scale = (num + .1).toFixed(1)
  return `scale(${scale})`;
}

const scaleOut = (string) => {
  let num = stringToNum(string);
  let scale = (num - .1).toFixed(1);
  if (scale < 1) {
    scale = 1;
  }
  return `scale(${scale})`;
}

const moveLeft = (string) => {
  let px = stringToNum(string);
  let position = px + distanceWidth;
  return `${position}px`;
}

const moveRight = (string) => {
  let px = stringToNum(string);
  let position = px - distanceWidth
  if (position < 0) {
    position = 0;
  }
  return `${position}px`;
}

/******************************************************************** 
 * Variables for width of View                                 *
*********************************************************************/
const maxWidthRight = '1225px';
const maxWidthLeft = '1575px';
const rightPositionForMaxWidthLeft = `${stringToNum(maxWidthLeft) - stringToNum(maxWidthRight)}px`;

module.exports = {
  calculateEventWidth,
  calculateTopPosition,
  calculateLeftPosition,
  giveEventColor,
  distanceWidth,
  calculateHeaderPosition,
  weeks,
  headerDates,
  scaleIn,
  scaleOut,
  moveLeft,
  moveRight,
  maxWidthRight,
  maxWidthLeft,
  rightPositionForMaxWidthLeft,
  filterNames,
  eventHeight,
};
