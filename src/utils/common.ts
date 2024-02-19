export const getLocalDateString = (date: string) =>
  new Date(date)
    .toLocaleDateString('ru-RU', {
      year: 'numeric',
      day: 'numeric',
      month: 'short',
    })
    .replace(' г.', '');
