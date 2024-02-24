import { ACCESS_TOKEN, MAIN_URL } from './constants';

export const getLocalDateString = (date: string) => {
  const months: { [key: string]: string } = {
    '01': 'янв.',
    '02': 'фев.',
    '03': 'мар.',
    '04': 'апр.',
    '05': 'май',
    '06': 'июн.',
    '07': 'июл.',
    '08': 'авг.',
    '09': 'сен.',
    '10': 'окт.',
    '11': 'ноя.',
    '12': 'дек.',
  };

  const [year, month, day] = date.split('.');
  if (!year || !month || !day) {
    console.error('Invalid date format');
    return null;
  }

  const formattedMonth = months[month];
  if (!formattedMonth) {
    console.error('Invalid month:', month);
    return null;
  }

  return `${parseInt(day, 10)} ${formattedMonth} ${year}`;
};

export const request = async (query: string) => {
  try {
    const response = await fetch(MAIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const repeatArray = <T>(arr: T[], times: number): T[] => {
  let repeatedArray: T[] = [];
  for (let i = 0; i < times; i++) {
    repeatedArray = repeatedArray.concat(arr);
  }
  return repeatedArray;
};
