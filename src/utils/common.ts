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
        Authorization:
          `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
