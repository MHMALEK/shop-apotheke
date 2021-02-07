const getRepositoriesDateFormat = () => {
  const currentDate = new Date();
  const oneWeekAgoDate = currentDate.getDate() - 7;
  currentDate.setDate(oneWeekAgoDate);
  const oneWeekAgoInIsoStringFormat = currentDate.toISOString().split('T')[0];
  return oneWeekAgoInIsoStringFormat;
};
export default getRepositoriesDateFormat;
