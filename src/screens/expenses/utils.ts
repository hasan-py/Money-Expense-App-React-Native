import moment from 'moment';

export const clearFormData = (setter: Function) => {
  setter({
    expenseName: '',
    amount: '',
    category: '',
    fromDate: new Date(),
    toDate: new Date(),
    expenseDate: new Date(),
  });
};

export const filterDataHandler = (
  expensesDataStore: any,
  formData: any,
  setFilterModal: Function,
  setExpensesData: Function,
) => {
  const filteredArray: any = [];

  expensesDataStore.forEach((item: any) => {
    let expenseDate = moment(moment(item?.createdAt).format('YYYY-MM-DD'));
    let startDate = moment(moment(formData?.fromDate).format('YYYY-MM-DD'));
    let endDate = moment(moment(formData?.toDate).format('YYYY-MM-DD'));

    let isInRange = expenseDate.isBetween(startDate, endDate, null, '[]');

    if (
      formData?.category?.value
        ? item?.category?.value === formData?.category?.value && isInRange
        : isInRange
    ) {
      filteredArray.push(item);
    }
  });

  setFilterModal(false);
  setExpensesData(filteredArray);
};
