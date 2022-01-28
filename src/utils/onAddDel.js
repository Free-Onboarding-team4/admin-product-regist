export const onAddDel = (num, items, setItems) => {
  let countArr = [...items];
  let counter = countArr.slice(-1)[0];
  counter += num;
  if (num > 0) {
    countArr.push(counter);
  } else {
    countArr.pop(counter);
  }
  setItems(countArr);
};
