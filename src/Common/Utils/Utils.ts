export const MonthShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const ConvDateMDY = (value: string) => {
  const dt = new Date(value);

  return `${MonthShort[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`;
};
