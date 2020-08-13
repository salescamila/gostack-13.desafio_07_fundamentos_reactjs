const formatDate = (value: string): string =>
  Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(Date.parse(value));

export default formatDate;
