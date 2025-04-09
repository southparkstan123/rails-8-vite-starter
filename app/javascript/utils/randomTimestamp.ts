export default (start: Date, end: Date = new Date()): number => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  ).getTime();
};
