export const unslugify = (slugi: string): string =>
  slugi
    .split('-')
    .map((item) => `${item[0].toLocaleUpperCase()}${item.substring(1)}`)
    .join(' ')
