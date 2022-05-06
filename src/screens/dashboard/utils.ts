import moment from 'moment';

export const filterTodaysData = (data: any, setter: Function) => {
  const filteredArray: any = [];

  data?.forEach((item: any) => {
    let expenseDate = moment(moment(item?.createdAt).format('YYYY-MM-DD'));
    let startDate = moment(moment().format('YYYY-MM-DD'));
    let endDate = moment(moment().format('YYYY-MM-DD'));

    let isInRange = expenseDate.isBetween(startDate, endDate, null, '[]');

    if (isInRange) {
      filteredArray.push(item);
    }
  });

  setter(filteredArray);
};
