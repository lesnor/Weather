export const formatDate = (timezone) => {
  const a = new Date();
  a.setMinutes((a.getMinutes() + a.getTimezoneOffset()) + timezone / 60);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  return date + ' ' + month + ' ' + hour + 'h: ' + min + 'm: ' + sec + 's';
};
