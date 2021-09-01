function initApplication() {
  let bankAccount1 = 10;
  let bankAccount2 = 10;
  let balance = addTenTimes(bankAccount1, bankAccount2);
  console.log('balance is: ' + balance);
};

function addTenTimes(input1, input2) {
  console.log('BEGIN addTenTimes function');
  let returnData = input1 * input2;
  for (let i = 0; i < 9; i++) {

    input1 = input1 + input2;
    console.log('input is' + input1)
  }
  returnData = input1;
  console.log('END addTenTimes function');
  return returnData;
};

initApplication();
