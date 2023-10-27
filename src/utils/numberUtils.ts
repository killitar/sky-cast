export const roundNumber = (value: number | undefined): string => {
  return Number(value).toPrecision(2) || '0';
};
