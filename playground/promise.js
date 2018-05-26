var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers.');
      }
    }, 1500)
  })
}

asyncAdd(5, 3).then( (res) => {
  console.log(res);
  return asyncAdd(res, 33);
//    return ayncAdd(res, '33');
}, (errorMessage) => {
  console.log(errorMessage);
}).then((res) => {
  console.log('Should be 41', res);
}, (errorMessage) => {
  console.log(errorMessage);
});


var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey, It worked.');
    //reject('Unable to fulfill promise.');
  }, 2500);
//  resolve('Hey, It worked.');
});

//If promise gets fulfilled.
somePromise.then( (message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
})
