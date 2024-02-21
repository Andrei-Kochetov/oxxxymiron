import { ACCESS_TOKEN, MAIN_URL } from './constants';

export const getLocalDateString = (date: string) =>
  new Date(date)
    .toLocaleDateString('ru-RU', {
      year: 'numeric',
      day: 'numeric',
      month: 'short',
    })
    .replace(' г.', '');

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
}